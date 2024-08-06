import { getOrders } from "services/get-orders"
import { DataTable } from "shadcn/data-table/data-table"
import { Order } from "types/tables.types"
import { columns } from "components/orders-data-table/orders-data-table-header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "shadcn/card"

export const OrdersDataTable = async () => {
	const orders = (await getOrders()) as Order[]

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Orders</CardTitle>
				<CardDescription>Recent orders from your store.</CardDescription>
			</CardHeader>
			<CardContent>{!!orders.length && <DataTable columns={columns} data={orders} />}</CardContent>
		</Card>
	)
}
