import { EmployeesTableRow } from "components/employees-table/employees-table-row"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "shadcn/table"

export const EmployeesTable = async ({ data }) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Avatar</TableHead>
					<TableHead>First name</TableHead>
					<TableHead>Last name</TableHead>
					<TableHead className="hidden sm:table-cell">Created at</TableHead>
				</TableRow>
			</TableHeader>{" "}
			<TableBody>
				{data?.map((employee) => (
					<EmployeesTableRow key={employee?.created_at} {...employee} />
				))}
			</TableBody>
		</Table>
	)
}
