import { AddCategoryForm } from "components/categories-add-form/categories-add-form"
import { CategoriesTableContainer } from "components/categories-table/categories-table-container"
import { AddSubcategoryForm } from "components/subcategories-forms/subcategories-add-form"
import { SubcategoriesTableContainer } from "components/subcategories-table/subcategories-table-container"

const Page = () => {
	return (
		<div className="grid gap-6">
			<div className="flex flex-col gap-4">
				<AddCategoryForm />
				<CategoriesTableContainer />
			</div>
			<div className="grid gap-6">
				<AddSubcategoryForm />
				<SubcategoriesTableContainer />
			</div>
		</div>
	)
}

export default Page
