import { QuickAddOrderFormSheet } from "components/orders-quick-add-form/orders-quick-add-form-sheet"
import { getTranslations } from "helpers/translations"
import { getCategories } from "services/get-categories"
import { getEmployees } from "services/get-employees"
import { getSubcategories } from "services/get-subcategories"
import type { Category, Employee, Subcategory } from "types/tables.types"

export const QuickAddFormContainer = async () => {
	const { orders } = await getTranslations()

	const { quickAction } = orders?.pages?.root?.actionCard
	const { headline, title } = orders?.forms?.quickAdd

	const [categories, employees, subcategories] = await Promise.all([getCategories(), getEmployees(), getSubcategories()])

	return (
		<QuickAddOrderFormSheet
			categories={categories as Category[]}
			employees={employees as Employee[]}
			subcategories={subcategories as Subcategory[]}
			translations={{
				headline,
				quickAction,
				title,
			}}
		/>
	)
}
