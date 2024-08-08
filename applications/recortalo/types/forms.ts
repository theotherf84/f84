import type { Category, Employee, Subcategory } from "types/tables.types"

export interface QuickAddOrderFormProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
	translations?: Record<string, any>
	onSubmit: () => void
}

export interface QuickAddOrderFormSheetProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
	translations?: Record<string, any>
}
