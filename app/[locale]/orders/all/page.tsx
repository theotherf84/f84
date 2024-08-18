import { OrdersDataTableContainer } from "components/(orders)/orders-data-table/orders-data-table-container"

const Page = () => (
	<div className="grid grid-cols-3 col-span-3 auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3 bg-muted/40">
		<div className="col-span-3">
			<OrdersDataTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
