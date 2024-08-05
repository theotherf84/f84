import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import type { Order } from "types/tables.types"

export const getOrders = async () => {
	const supabase = createClient()

	const { data, error } = await supabase.from(TableName.Orders).select()

	if (error) return

	return data as Order[]
}
