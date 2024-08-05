import { SubcategoriesAddForm } from "components/subcategories-forms/subcategories-add-form"
import { SubcategoriesTable } from "components/subcategories-table/subcategories-table"

const Page = () => {
	return (
		<div className="grid gap-6">
			<SubcategoriesAddForm />
			<SubcategoriesTable />
		</div>
	)
}

export default Page
