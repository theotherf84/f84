import { getOrders } from "services/get-orders"
import { DataTable } from "shadcn/data-table/data-table"
import { Order } from "types/tables.types"
import { columns } from "components/orders-data-table/orders-data-table-header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "shadcn/card"

export const OrdersDataTable = async () => {
	const orders = (await getOrders()) as Order[]

	const hasOrders = !!orders.length

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
