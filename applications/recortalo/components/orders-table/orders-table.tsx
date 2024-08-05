import type { Order } from "types/tables.types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { Table, TableBody } from "shadcn/table"
import { Tabs, TabsContent } from "shadcn/tabs"
import { OrdersTableHeader } from "components/orders-table/orders-table-header"
import { OrdersTableRow } from "components/orders-table/orders-table-row"
import { OrdersTableToolbar } from "components/orders-table/orders-table-toolbar"
import { getOrders } from "services/get-orders"

export const OrdersTable = async () => {
	const orders = (await getOrders()) as Order[]

	return (
		<Tabs defaultValue="week">
			<OrdersTableToolbar />
			<TabsContent value="week">
				<Card>
					<CardHeader className="px-7">
						<CardTitle>Orders</CardTitle>
						<CardDescription>Recent orders from your store.</CardDescription>
					</CardHeader>
					<CardContent>
						{!!orders.length && (
							<Table>
								<OrdersTableHeader />
								<TableBody>
									{orders?.map((order) => (
										<OrdersTableRow key={order?.created_at} {...order} />
									))}
								</TableBody>
							</Table>
						)}
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	)
}
