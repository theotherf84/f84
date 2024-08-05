import { getTranslations } from "helpers/translations"
import { getCategories } from "services/get-categories"
import { getSubcategories } from "services/get-subcategories"
import { QuickAddOrderFormSheet } from "components/orders-forms/orders-quick-add-form-sheet"

export const QuickAddFormContainer = async () => {
	const translations = await getTranslations("es-AR")

	const { quickAction } = translations?.orders?.pages?.root?.actionCard
	const { headline, title } = translations?.orders?.forms?.quickAdd

	const [categories, subcategories] = await Promise.all([getCategories(), getSubcategories()])

	return (
		<QuickAddOrderFormSheet
			categories={categories}
			subcategories={subcategories}
			translations={{
				headline,
				quickAction,
				title,
			}}
		/>
	)
}
