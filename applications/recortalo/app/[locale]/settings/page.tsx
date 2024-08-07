import { CategoriesAddForm } from "components/categories-forms/categories-add-form"
import { CategoriesTable } from "components/categories-table/categories-table"
import { SubcategoriesAddForm } from "components/subcategories-forms/subcategories-add-form"
import { SubcategoriesTable } from "components/subcategories-table/subcategories-table"

const Page = () => {
	return (
		<div className="grid gap-6">
			<div className="flex flex-col gap-4">
				<CategoriesAddForm />
				<CategoriesTable />
			</div>
			<div className="grid gap-6">
				<SubcategoriesAddForm />
				<SubcategoriesTable />
			</div>
		</div>
	)
}

export default Page
