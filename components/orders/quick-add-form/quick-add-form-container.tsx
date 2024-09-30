import { ContentSheet } from "components/content-sheet"
import { QuickAddOrderForm } from "components/orders/quick-add-form/quick-add-form"
import { getTranslations } from "helpers/get-translations"
import { getCategories } from "services/get-categories"
import { getEmployees } from "services/get-employees"
import { getSubcategories } from "services/get-subcategories"

export const QuickAddOrderFormContainer = async () => {
	const { forms, inputs, pages } = await getTranslations()

	const [categories, employees, subcategories] = await Promise.all([getCategories(), getEmployees(), getSubcategories()])

	return (
		<ContentSheet
			messages={{
				action: "Agregar venta",
				subtitle: forms.addOrder.sheetSubtitle,
				title: forms.addOrder.sheetTitle,
			}}
		>
			<QuickAddOrderForm categories={categories} employees={employees} subcategories={subcategories} messages={{ forms, inputs }} />
		</ContentSheet>
	)
}
