import { getCategories } from "services/get-categories"
import { Label } from "shadcn/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"
import type { Category } from "types/tables.types"

export const CategoriesSelectInput = async () => {
	const categories = (await getCategories()) as Category[]

	return (
		!!categories?.length && (
			<>
				<Label htmlFor="category">Category</Label>
				<Select name="category">
					<SelectTrigger aria-label="Select category" id="category">
						<SelectValue placeholder="Select category" />
					</SelectTrigger>
					<SelectContent>
						{categories.map((category) => (
							<SelectItem key={category.id} value={String(category.id)}>
								{category.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</>
		)
	)
}
