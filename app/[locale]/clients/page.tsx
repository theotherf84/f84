import { AddClientForm } from "components/(clients)/clients-add-form/clients-add-form"
import { ClientsTableContainer } from "components/(clients)/clients-table/clients-table-container"

const Page = () => (
	<div className="flex flex-col gap-6 md:container md:mx-auto p-6">
		<div className="flex flex-1 flex-col items-center justify-center gap-6">
			<AddClientForm />
			<ClientsTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
