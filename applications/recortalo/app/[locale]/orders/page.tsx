import { OrdersActionCard } from "components/(orders)/orders-action-card"
import { OrdersTableContainer } from "components/(orders)/orders-table/orders-table-container"
import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

const Page = () => (
	<div className="grid grid-cols-3 col-span-3 auto-rows-max items-start gap-4 md:gap-8">
		<div className="grid col-span-3 lg:col-span-2 gap-8">
			<div className="flex flex-col md:flex-row gap-4">
				<OrdersActionCard />
				<Card className="flex flex-col gap-2 flex-1">
					<CardHeader>
						<CardTitle>Reporte del dia</CardTitle>
						<CardDescription className="leading-relaxed">Un reporte diario de ventas por empleado</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-row gap-4">
						<Button asChild>
							<Link href="/orders/employees">Ver reporte</Link>
						</Button>
					</CardContent>
				</Card>{" "}
			</div>
			<OrdersTableContainer />
		</div>
	</div>
)

export default Page
