import { TableHead, TableHeader, TableRow } from "../../shadcn/table"

export const EmployeesTableHeader = () => (
	<TableHeader>
		<TableRow>
		<TableHead>Avatar</TableHead>
		<TableHead>First name</TableHead>
			<TableHead>Last name</TableHead>
			<TableHead className="hidden sm:table-cell">Created at</TableHead>
		</TableRow>
	</TableHeader>
)
