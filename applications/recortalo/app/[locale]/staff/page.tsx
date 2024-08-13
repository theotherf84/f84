import { AddEmployeeForm } from "components/employees-add-form/employees-add-form"
import { EmployeesTable } from "components/employees-table/employees-table"

const Page = () => (
	<div className="grid grid-cols-3 col-span-3 auto-rows-max items-start gap-4 md:gap-8">
		<div className="grid col-span-3 lg:col-span-2 gap-8">
			<AddEmployeeForm />
			<EmployeesTable />
		</div>
	</div>
)

export default Page
