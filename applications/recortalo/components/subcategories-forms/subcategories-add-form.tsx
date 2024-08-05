import { Input } from "shadcn/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { SubmitButton } from "components/submit-button"
import { action as addSubcategory } from "actions/add-subcategory"
import { CategoriesSelectInput } from "components/categories-select-input"

export const SubcategoriesAddForm = () => (
	<form action={addSubcategory}>
		<Card>
			<CardHeader>
				<CardTitle>Subcategory</CardTitle>
				<CardDescription>Used to subclassify orders in your store.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<CategoriesSelectInput />
				<div className="flex flex-col gap-2">
					<Input name="name" placeholder="Subcategory name" />
					<p className="text-sm text-muted-foreground">The name of the subcategory that you want to add.</p>
				</div>
			</CardContent>
			<CardFooter className="px-6 py-4">
				<SubmitButton>Save subcategory</SubmitButton>
			</CardFooter>
		</Card>
	</form>
)
