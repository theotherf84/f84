import { TableHead, TableHeader, TableRow } from "../../shadcn/table"

export const CategoriesTableHeader = () => (
	<TableHeader>
		<TableRow>
			<TableHead>Category</TableHead>
			<TableHead className="hidden sm:table-cell">Date</TableHead>
		</TableRow>
	</TableHeader>
)
