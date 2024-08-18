import { AddCategoryForm } from "components/(categories)/categories-add-form/categories-add-form"
import { CategoriesTableContainer } from "components/(categories)/categories-table/categories-table-container"
import { AddSubcategoryForm } from "components/(subcategories)/subcategories-forms/subcategories-add-form"
import { SubcategoriesTableContainer } from "components/(subcategories)/subcategories-table/subcategories-table-container"
import React from "react"

const Page = () => (
	<div className="grid gap-6">
		<div className="mx-auto grid w-full max-w-6xl gap-2">
			<h1 className="text-3xl font-semibold">Categories</h1>
		</div>
		<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
			<div className="grid col-span-1">
				<AddCategoryForm />
			</div>
			<div className="grid col-span-1">
				<CategoriesTableContainer />
			</div>
		</div>
		<div className="mx-auto grid w-full max-w-6xl gap-2">
			<h1 className="text-3xl font-semibold">Subcategories</h1>
		</div>
		<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
			<div className="grid col-span-1">
				<AddSubcategoryForm />
			</div>
			<div className="grid col-span-1">
				<SubcategoriesTableContainer />
			</div>
		</div>
	</div>
)

export default Page

export const runtime = "edge"
