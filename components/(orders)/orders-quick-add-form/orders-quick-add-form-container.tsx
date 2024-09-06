import { QuickAddOrderForm } from "components/(orders)/orders-quick-add-form/orders-quick-add-form"
import { ContentSheet } from "components/content-sheet"
import { getTranslations } from "helpers/translations"
import { getCategories } from "services/get-categories"
import { getEmployees } from "services/get-employees"
import { getSubcategories } from "services/get-subcategories"

export const QuickAddOrderFormContainer = async () => {
	const { orders } = await getTranslations()

	const { quickAction } = orders?.pages?.root?.actionCard
	const { headline, title } = orders?.forms?.quickAdd

	const [categories, employees, subcategories] = await Promise.all([getCategories(), getEmployees(), getSubcategories()])

	return (
		<ContentSheet
			messages={{
				action: quickAction,
				subtitle: headline,
				title,
			}}
		>
			<QuickAddOrderForm categories={categories} employees={employees} subcategories={subcategories} />
		</ContentSheet>
	)
}
