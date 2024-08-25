import { ClientsTable } from "components/(clients)/clients-table/clients-table"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getClients } from "services/get-clients"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const ClientsTableContainer = async () => {
	const data = await getClients()

	const hasData = !!data.length

	return (
		<Card className="flex flex-col gap-2 lg:min-w-1/2">
			<CardHeader className="px-7">
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
