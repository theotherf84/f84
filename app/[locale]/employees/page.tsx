import { AddEmployeeForm } from "components/(employees)/employees-add-form/employees-add-form"
import { EmployeesTableContainer } from "components/(employees)/employees-table/employees-table-container"

const Page = () => (
	<div className="flex flex-col gap-6 md:container md:mx-auto p-6">
		<div className="flex flex-1 flex-col items-center justify-center gap-6">
			<AddEmployeeForm />
			<EmployeesTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
