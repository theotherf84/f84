import type { Category } from "types/tables.types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { Table, TableBody } from "shadcn/table"
import { getCategories } from "services/get-categories"
import { CategoriesTableRow } from "components/categories-table/categories-table-row"
import { CategoriesTableHeader } from "components/categories-table/categories-table-header"

export const CategoriesTable = async () => {
	const categories = (await getCategories()) as Category[]

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Categories</CardTitle>
				<CardDescription>The list of categories from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{!!categories.length && (
					<Table>
						<CategoriesTableHeader />
						<TableBody>
							{categories?.map((category) => (
								<CategoriesTableRow key={category?.created_at} {...category} />
							))}
						</TableBody>
					</Table>
				)}
			</CardContent>
		</Card>
	)
}
