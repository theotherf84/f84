import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import type { Subcategory } from "types/tables.types"

export const getSubcategories = async () => {
	const supabase = createClient()

	const { data, error } = await supabase.from(TableName.Subcategories).select()

	if (error) return [] as Subcategory[]

	return data
}
