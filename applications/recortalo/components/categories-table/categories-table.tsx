import { CategoriesTableRow } from "components/categories-table/categories-table-row"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "shadcn/table"

export const CategoriesTable = async ({ data }) => (
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Category</TableHead>
				<TableHead className="hidden sm:table-cell">Date</TableHead>
			</TableRow>
		</TableHeader>{" "}
		<TableBody>
			{data.map((category) => (
				<CategoriesTableRow key={category?.created_at} {...category} />
			))}
		</TableBody>
	</Table>
)
