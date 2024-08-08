import { createClient } from "helpers/supabase/supabase-server"
import { TableName } from "enumerations/table-name"
import { Employee } from "types/tables.types"

export const getEmployees = async () => {
	const supabase = createClient()

	const { data, error } = await supabase.from(TableName.Employees).select()

	if (error) return

	return data as Employee[]
}
