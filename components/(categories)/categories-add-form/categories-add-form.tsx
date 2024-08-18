import { Input } from "shadcn/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { SubmitButton } from "components/submit-button"
import { action } from "actions/add-category"

export const AddCategoryForm = () => (
	<form action={action}>
		<Card>
			<CardHeader>
				<CardTitle>Add a category</CardTitle>
				<CardDescription>Used to classify orders in your store.</CardDescription>
			</CardHeader>
			<CardContent>
				<Input name="name" placeholder="Category name" />
			</CardContent>
			<CardFooter className="px-6 py-4">
				<SubmitButton>Save category</SubmitButton>
			</CardFooter>
		</Card>
	</form>
)