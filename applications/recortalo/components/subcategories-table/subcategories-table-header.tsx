import { TableHead, TableHeader, TableRow } from "../../shadcn/table"

export const SubcategoriesTableHeader = () => (
	<TableHeader>
		<TableRow>
			<TableHead>Subcategory</TableHead>
			<TableHead className="hidden sm:table-cell">Date</TableHead>
		</TableRow>
	</TableHeader>
)
