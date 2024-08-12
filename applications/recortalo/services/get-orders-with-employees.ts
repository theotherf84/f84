import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import type { OrderWithEmployee } from "types/tables.types"

export const getOrdersWithEmployees = async () => {
	const supabase = createClient()

	const query = "*, employee (*)"

	const { data, error } = await supabase.from(TableName.Orders).select(query).returns<OrderWithEmployee[]>()

	if (error) return [] as OrderWithEmployee[]

	return data
}