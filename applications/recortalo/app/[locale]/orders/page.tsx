import { OrdersActionCard } from "components/orders-action-card"
import { OrdersTable } from "components/orders-table/orders-table"

const Page = async () => (
	<div className="grid grid-cols-3 col-span-3 auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3 bg-muted/40">
		<div className="col-span-2">
			<div className="flex flex-col gap-6">
				<OrdersActionCard />
				<OrdersTable />
			</div>
		</div>
	</div>
)

export default Page
