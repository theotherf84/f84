import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase/supabase-server"
import type { Category } from "types/tables"

export const getCategories = async () => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Categories).select()

	if (error) return [] as Category[]

	return data
}
