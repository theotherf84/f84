import { AddClientForm } from "components/(clients)/clients-add-form/clients-add-form"
import { ClientsTableContainer } from "components/(clients)/clients-table/clients-table-container"

const Page = () => (
	<div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max items-start gap-6">
		<div className="grid col-span-1">
			<AddClientForm />
		</div>
		<div className="grid col-span-1">
			<ClientsTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
