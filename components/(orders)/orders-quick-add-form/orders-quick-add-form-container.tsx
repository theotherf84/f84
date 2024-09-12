import { QuickAddOrderForm } from "components/(orders)/orders-quick-add-form/orders-quick-add-form"
import { ContentSheet } from "components/content-sheet"
import { getTranslations } from "helpers/get-translations"
import { getCategories } from "services/get-categories"
import { getEmployees } from "services/get-employees"
import { getSubcategories } from "services/get-subcategories"

export const QuickAddOrderFormContainer = async () => {
	const { ordersPageActionCardQuickButtonLabel, quickAddOrderFormSheetSubtitle, quickAddOrderFormSheetTitle } = await getTranslations()

	const [categories, employees, subcategories] = await Promise.all([getCategories(), getEmployees(), getSubcategories()])

	const messages = {
		action: ordersPageActionCardQuickButtonLabel,
		subtitle: quickAddOrderFormSheetSubtitle,
		title: quickAddOrderFormSheetTitle,
	}

	return (
		<ContentSheet messages={messages}>
			<QuickAddOrderForm categories={categories} employees={employees} subcategories={subcategories} />
		</ContentSheet>
	)
}
