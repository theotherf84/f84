import { OrdersDataTableContainer } from "components/(orders)/orders-data-table/orders-data-table-container"

const Page = () => (
	<div className="grid col-span-3 items-start gap-4 md:gap-8 bg-muted/40">
		<OrdersDataTableContainer />
	</div>
)

export default Page

export const runtime = "edge"
