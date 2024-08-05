import type { Subcategory } from "types/tables.types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { Table, TableBody } from "shadcn/table"
import { OrdersTableHeader } from "components/orders-table/orders-table-header"
import { getSubcategories } from "services/get-subcategories"
import { SubcategoriesTableRow } from "components/subcategories-table/subcategories-table-row"

export const SubcategoriesTable = async () => {
	const subcategories = (await getSubcategories()) as Subcategory[]

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Subcategories</CardTitle>
				<CardDescription>The list of subcategories from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{!!subcategories.length && (
					<Table>
						<OrdersTableHeader />
						<TableBody>
							{subcategories?.map((subcategory) => (
								<SubcategoriesTableRow key={subcategory?.created_at} {...subcategory} />
							))}
						</TableBody>
					</Table>
				)}
			</CardContent>
		</Card>
	)
}
