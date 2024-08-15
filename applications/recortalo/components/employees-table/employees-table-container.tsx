import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getEmployees } from "services/get-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { EmployeesTable } from "./employees-table"

export const EmployeesTableContainer = async () => {
	const data = await getEmployees()

	const hasData = !!data.length

	return (
		<Card className="flex flex-col gap-2 lg:min-w-1/2">
			<CardHeader className="px-7">
				<CardTitle>Categories</CardTitle>
				<CardDescription>The list of categories from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasData && <EmployeesTable data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}
