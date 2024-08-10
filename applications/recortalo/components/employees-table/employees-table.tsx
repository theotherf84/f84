import { EmployeesTableHeader } from "components/employees-table/employees-table-columns"
import { EmployeesTableRow } from "components/employees-table/employees-table-row"
import { getEmployees } from "services/get-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { Table, TableBody } from "shadcn/table"
import type { Employee } from "types/tables.types"

export const EmployeesTable = async () => {
	const employees = (await getEmployees()) as Employee[]

	const hasEmployees = !!employees.length

	return (
		<Card className="flex flex-col gap-2 lg:min-w-1/2">
			<CardHeader className="px-7">
				<CardTitle>Categories</CardTitle>
				{hasEmployees && <CardDescription>The list of categories from your store.</CardDescription>}
			</CardHeader>
			<CardContent>
				{hasEmployees && (
					<Table>
						<EmployeesTableHeader />
						<TableBody>
							{employees.map((employee) => (
								<EmployeesTableRow key={employee?.created_at} {...employee} />
							))}
						</TableBody>
					</Table>
				)}
				{!hasEmployees && (
					<div className="text-muted-foreground flex flex-col items-center justify-center">
						Nothing to show yet, try adding a staff member of your store.
					</div>
				)}
			</CardContent>
		</Card>
	)
}
