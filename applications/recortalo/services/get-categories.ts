import { createClient } from "helpers/supabase/supabase-server"
import type { Category } from "types/tables.types"
import { TableName } from "enumerations/table-name"

export const getCategories = async () => {
	const supabase = createClient()

	const { data, error } = await supabase.from(TableName.Categories).select()

	if (error) return

	return data as Category[]
}
