import type { formSchema as addClientFormSchema } from "components/(clients)/clients-add-form/clients-add-form-schema"
import type { formSchema as addEmployeeFormSchema } from "components/(employees)/employees-add-form/employees-add-form-schema"
import type { formSchema as quickAddOrderFormSchema } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-schema"
import type { Category, Employee, Subcategory } from "types/tables.types"
import type * as zod from "zod"

export type AddClientFormFieldValues = zod.infer<typeof addClientFormSchema>

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
export interface AddClientFormProperties {}

export interface FormProperties {
	onSubmit: () => void
}

export type AddEmployeeFormFieldValues = zod.infer<typeof addEmployeeFormSchema>

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
export interface AddEmployeeFormProperties {}

export interface QuickAddOrderFormProperties extends FormProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	translations?: Record<string, any>
}

export interface QuickAddOrderFormSheetProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	translations?: Record<string, any>
}

export type QuickAddOrderFormFieldValues = zod.infer<typeof quickAddOrderFormSchema>
