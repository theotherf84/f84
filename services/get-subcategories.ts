import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase/supabase-server"
import type { Subcategory } from "types/tables"

export const getSubcategories = async () => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Subcategories).select()

	if (error) return [] as Subcategory[]

	return data
}
