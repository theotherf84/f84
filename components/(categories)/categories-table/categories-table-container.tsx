import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getCategories } from "services/get-categories"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { CategoriesTable } from "./categories-table"

export const CategoriesTableContainer = async () => {
	const data = await getCategories()

	const hasData = !!data.length

	return (
		<Card className="w-full">
			<CardHeader className="px-6">
				<CardTitle>Categories</CardTitle>
				<CardDescription>The list of categories from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasData && <CategoriesTable data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}
