import type { Subcategory } from "types/tables.types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { Table, TableBody } from "shadcn/table"
import { getSubcategories } from "services/get-subcategories"
import { SubcategoriesTableRow } from "components/subcategories-table/subcategories-table-row"
import { SubcategoriesTableHeader } from "./subcategories-table-header"

export const SubcategoriesTable = async () => {
	const subcategories = (await getSubcategories()) as Subcategory[]

	const hasSubcategories = !!subcategories.length

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Subcategories</CardTitle>
				{hasSubcategories && <CardDescription>The list of subcategories from your store.</CardDescription>}
			</CardHeader>
			<CardContent>
				{hasSubcategories && (
					<Table>
						<SubcategoriesTableHeader />
						<TableBody>
							{subcategories.map((subcategory) => (
								<SubcategoriesTableRow key={subcategory?.created_at} {...subcategory} />
							))}
						</TableBody>
					</Table>
				)}
				{!hasSubcategories && (
					<div className="text-muted-foreground flex flex-col items-center justify-center">
						Nothing to show yet, try adding a subcategory to your store.
					</div>
				)}
			</CardContent>
		</Card>
	)
}
