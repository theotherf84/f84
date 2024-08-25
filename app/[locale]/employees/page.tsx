import { AddEmployeeForm } from "components/(employees)/employees-add-form/employees-add-form"
import { EmployeesTableContainer } from "components/(employees)/employees-table/employees-table-container"

const Page = () => (
	<div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max items-start gap-6">
		<div className="grid col-span-1">
			<AddEmployeeForm />
		</div>
		<div className="grid col-span-1">
			<EmployeesTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
