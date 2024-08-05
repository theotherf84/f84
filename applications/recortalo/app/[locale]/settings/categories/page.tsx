import { CategoriesAddForm } from "components/categories-forms/categories-add-form"
import { CategoriesTable } from "components/categories-table/categories-table"

const Page = () => {
	return (
		<div className="flex flex-col gap-6">
			<CategoriesAddForm />
			<CategoriesTable />
		</div>
	)
}

export default Page
