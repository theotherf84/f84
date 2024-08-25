import { EmployeesTable } from "components/(employees)/employees-table/employees-table"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getEmployees } from "services/get-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const EmployeesTableContainer = async () => {
	const data = await getEmployees()

	const hasData = !!data.length

	return (
		<Card className="flex flex-col gap-2 lg:min-w-1/2">
			<CardHeader className="px-7">
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
