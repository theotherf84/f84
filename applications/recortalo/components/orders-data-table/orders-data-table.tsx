import { columns } from "components/orders-data-table/orders-data-table-columns"
import { getOrders } from "services/get-orders"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const OrdersDataTable = async () => {
	const orders = await getOrders()

	const hasOrders = !!orders?.length

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Orders</CardTitle>
				<CardDescription>Recent orders from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasOrders && <DataTable columns={columns} data={orders} />}
				{!hasOrders && (
					<div className="text-muted-foreground flex flex-col items-center justify-center">Nothing to show yet, try creating an order.</div>
				)}
			</CardContent>
		</Card>
	)
}
