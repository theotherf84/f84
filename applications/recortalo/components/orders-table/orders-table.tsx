import { OrdersTableHeader } from "components/orders-table/orders-table-header"
import { OrdersTableRow } from "components/orders-table/orders-table-row"
import { OrdersTableToolbar } from "components/orders-table/orders-table-toolbar"
import { getOrders } from "services/get-orders"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { Table, TableBody } from "shadcn/table"

export const OrdersTable = async () => {
	const orders = await getOrders()

	const hasOrders = !!orders?.length

	return (
		<div className="flex flex-col gap-4">
			<OrdersTableToolbar />
			<Card>
				<CardHeader className="px-7">
					<CardTitle>Orders</CardTitle>
					<CardDescription>Recent orders from your store.</CardDescription>
				</CardHeader>
				<CardContent>
					{hasOrders && (
						<Table>
							<OrdersTableHeader />
							<TableBody>
								{orders?.map(({ created_at, ...order }) => (
									<OrdersTableRow key={created_at} created_at={created_at} {...order} />
								))}
							</TableBody>
						</Table>
					)}
					{!hasOrders && (
						<div className="text-muted-foreground flex flex-col items-center justify-center">Nothing to show yet, try creating an order.</div>
					)}
				</CardContent>
			</Card>
		</div>
	)
}
