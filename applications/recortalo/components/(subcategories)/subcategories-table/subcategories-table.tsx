import { SubcategoriesTableRow } from "components/(subcategories)/subcategories-table/subcategories-table-row"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "shadcn/table"

export const SubcategoriesTable = async ({ data }) => (
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Subcategory</TableHead>
				<TableHead className="hidden sm:table-cell">Date</TableHead>
			</TableRow>
		</TableHeader>{" "}
		<TableBody>
			{data.map((subcategory) => (
				<SubcategoriesTableRow key={subcategory?.created_at} {...subcategory} />
			))}
		</TableBody>
	</Table>
)
