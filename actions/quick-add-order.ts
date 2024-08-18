"use server"

import { formSchema } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-schema"
import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import { redirect } from "next/navigation"
import type { QuickAddOrderFormFieldValues } from "types/forms"

export const action = async (data: QuickAddOrderFormFieldValues) => {
	const validation = formSchema.safeParse({
		...data,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const { error: userError } = await supabase.auth.getUser()

	if (userError) return redirect("/orders?error=Could not authenticate user")

	const { date, ...order } = validation.data

	const { error: orderError, status: orderStatus } = await supabase.from(TableName.Orders).insert({
		...order,
		created_at: date.toISOString(),
	})

	if (orderError) return redirect("/orders?error=Could not create an order")

	return orderStatus
}