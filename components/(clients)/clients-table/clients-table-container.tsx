import { ClientsTable } from "components/(clients)/clients-table/clients-table"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getClients } from "services/get-clients"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

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
				{hasData && <ClientsTable data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}
