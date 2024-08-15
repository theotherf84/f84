import { columns } from "components/orders-data-table/orders-data-table-columns"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getOrdersWithEmployees } from "services/get-orders-with-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const OrdersDataTableContainer = async () => {
	const data = await getOrdersWithEmployees()

	const hasData = !!data?.length

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Orders</CardTitle>
				<CardDescription>Recent orders from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasData && <DataTable columns={columns} data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}