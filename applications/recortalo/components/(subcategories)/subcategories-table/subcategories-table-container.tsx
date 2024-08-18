import { SubcategoriesTable } from "components/(subcategories)/subcategories-table/subcategories-table"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getSubcategories } from "services/get-subcategories"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const SubcategoriesTableContainer = async () => {
	const data = await getSubcategories()

	const hasData = !!data.length

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Subcategories</CardTitle>
				<CardDescription>The list of subcategories from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasData && <SubcategoriesTable data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}
