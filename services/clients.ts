"use server"

import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase/supabase-server"
import type { Client } from "types/tables.types"

export const getClients = async () => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Clients).select()

	if (error) return [] as Client[]

	return data
}

export const getClientsBySearchTerm = async (searchTerm: string) => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Clients).select().textSearch("first_name", searchTerm)

	if (error) return [] as Client[]

	return data
}
