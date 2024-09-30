import { columns } from "components/clients/table/table-columns"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getClients } from "services/get-clients"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const ClientsTableContainer = async () => {
	const data = await getClients()

	const hasData = !!data.length

	return (
		<Card className="w-full">
			<CardHeader className="px-6">
				<CardTitle>Employees</CardTitle>
				<CardDescription>The list of employees of your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasData && <DataTable columns={columns} data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}
