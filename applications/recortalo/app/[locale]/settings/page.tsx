import { AddCategoryForm } from "components/categories-forms/categories-add-form"
import { CategoriesTable } from "components/categories-table/categories-table"
import { AddSubcategoryForm } from "components/subcategories-forms/subcategories-add-form"
import { SubcategoriesTable } from "components/subcategories-table/subcategories-table"

const Page = () => {
	return (
		<div className="grid gap-6">
			<div className="flex flex-col gap-4">
				<AddCategoryForm />
				<CategoriesTable />
			</div>
			<div className="grid gap-6">
				<AddSubcategoryForm />
				<SubcategoriesTable />
			</div>
		</div>
	)
}

export default Page
