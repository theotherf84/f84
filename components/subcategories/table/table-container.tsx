import { columns } from "components/subcategories/table/table-columns"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getSubcategories } from "services/get-subcategories"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const SubcategoriesTableContainer = async () => {
	const data = await getSubcategories()

	const hasData = !!data.length

	return (
		<Card className="w-full">
			<CardHeader className="px-6">
				<CardTitle>Subcategories</CardTitle>
				<CardDescription>The list of subcategories from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{hasData && <DataTable columns={columns} data={data} />}
				{!hasData && <TableDataPlaceholder />}
			</CardContent>
		</Card>
	)
}
