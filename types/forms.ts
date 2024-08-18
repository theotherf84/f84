import type { formSchema } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-schema"
import type { Category, Employee, Subcategory } from "types/tables.types"
import type { z as zod } from "zod"

export interface QuickAddOrderFormProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	translations?: Record<string, any>
	onSubmit: () => void
}

export interface QuickAddOrderFormSheetProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	translations?: Record<string, any>
}

export type QuickAddOrderFormFieldValues = zod.infer<typeof formSchema>
