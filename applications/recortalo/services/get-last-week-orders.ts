import { TableName } from "enumerations/table-name"
import { getDaysOfWeek } from "helpers/get-days-of-week"
import { createClient } from "helpers/supabase/supabase-server"
import type { Order } from "types/tables.types"

export const getLastWeekOrders = async () => {
	const supabase = createClient()

	const query = "*"

	const daysOfWeek = getDaysOfWeek()

	const monday = daysOfWeek[0]
	const sunday = daysOfWeek[daysOfWeek.length - 1]

	const { data, error } = await supabase.from(TableName.Orders).select(query).lt("created_at", sunday).gt("created_at", monday).returns<Order[]>()

	if (error) return [] as Order[]

	return data
}
