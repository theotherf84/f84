import { EmployeesTable } from "components/(employees)/employees-table/employees-table"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getEmployees } from "services/get-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const EmployeesTableContainer = async () => {
	const data = await getEmployees()

	const hasData = !!data.length

	return (
		<Card className="w-full">
			<CardHeader className="px-6">
				<CardTitle>Employees</CardTitle>
				<CardDescription>The list of employees of your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasData && <EmployeesTable data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}
