import type { formSchema as addClientFormSchema } from "components/clients/add-form/add-form-schema"
import type { formSchema as addEmployeeFormSchema } from "components/employees/add-form/add-form-schema"
import type { formSchema as quickAddOrderFormSchema } from "components/orders/quick-add-form/quick-add-form-schema"
import type { Translation } from "types/helpers"
import type { Category, Employee, Subcategory } from "types/tables"
import type * as zod from "zod"

export type AddClientFormFieldValues = zod.infer<typeof addClientFormSchema>

export interface AddClientFormProperties {
	messages: Partial<Translation>
}

export interface AddEmployeeFormProperties {
	messages: Partial<Translation>
}

export interface FormOnSheetProperties {
	onClose?: () => void
}

export interface FormProperties {
	onSubmit: () => void
}

export type AddEmployeeFormFieldValues = zod.infer<typeof addEmployeeFormSchema>

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
export interface AddEmployeeFormProperties {}

export interface QuickAddOrderFormProperties extends FormOnSheetProperties {
	categories: Category[]
	employees: Employee[]
	messages: Partial<Translation>
	subcategories: Subcategory[]
}

export interface QuickAddOrderFormSheetProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	translations?: Record<string, any>
}

export type QuickAddOrderFormFieldValues = zod.infer<typeof quickAddOrderFormSchema>
