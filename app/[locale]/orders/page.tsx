import { OrdersActionCard } from "components/(orders)/orders-action-card"
import { OrdersTableContainer } from "components/(orders)/orders-table/orders-table-container"
import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

const Page = () => (
	<div className="md:container md:mx-auto p-6">
		<div className="grid col-span-3 md:col-span-2 gap-6">
			<div className="flex flex-col md:flex-row gap-4">
				<OrdersActionCard />
				<Card className="flex flex-1 flex-col gap-4 justify-between">
					<CardHeader>
						<CardTitle>Reporte del dia</CardTitle>
						<CardDescription className="leading-relaxed">Un reporte diario de ventas por empleado</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-row gap-2">
						<Button asChild>
							<Link href="/orders/employees">Ver reporte</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
			<OrdersTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
