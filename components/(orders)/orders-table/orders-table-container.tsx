import { OrdersTable } from "components/(orders)/orders-table/orders-table"
import { OrdersTableToolbar } from "components/(orders)/orders-table/orders-table-toolbar"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getOrdersWithEmployees } from "services/get-orders-with-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const OrdersTableContainer = async () => {
	const data = await getOrdersWithEmployees()

	const hasData = !!data?.length

	return (
		<div className="flex flex-col gap-4">
			<OrdersTableToolbar />
			<Card>
				<CardHeader className="px-6">
					<CardTitle>Orders</CardTitle>
					<CardDescription>Recent orders from your store.</CardDescription>
				</CardHeader>
				<CardContent>
					{hasData && <OrdersTable data={data} />}
					{!hasData && <TableDataPlaceholder />}
				</CardContent>
			</Card>
		</div>
	)
}
