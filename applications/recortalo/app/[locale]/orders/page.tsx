import { OrdersActionCard } from "components/orders-action-card"
import { OrdersTable } from "components/orders-table/orders-table"

const Page = () => (
	<div className="grid grid-cols-3 col-span-3 auto-rows-max items-start gap-4 md:gap-8">
		<div className="grid col-span-3 lg:col-span-2 gap-8">
			<OrdersActionCard />
			<OrdersTable />
		</div>
	</div>
)

export default Page
