"use server"

import { formSchema } from "components/orders-quick-add-form/orders-quick-add-form-schema"
import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import { redirect } from "next/navigation"
import type { QuickAddOrderFormFieldValues } from "types/forms"

export const action = async (data: QuickAddOrderFormFieldValues) => {
	const validation = formSchema.safeParse({
		...data,
		created_at: new Date().toISOString(),
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const { error: getUserError } = await supabase.auth.getUser()

	if (getUserError) return redirect("/orders?error=Could not authenticate user")

	const { error: insertOrderError, status: insertOrderStatus } = await supabase.from(TableName.Orders).insert({
		...validation?.data,
	})

	if (insertOrderError) return redirect("/orders?error=Could not create an order")

	return insertOrderStatus
}
