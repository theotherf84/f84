"use server"

import { formSchema } from "components/orders-forms/orders-quick-add-form-schema"
import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (data) => {
	const category = data?.category
	const subcategory = data?.subcategory
	const cost = data?.cost
	const status = data?.status

	const validation = formSchema.safeParse({
		category,
		subcategory,
		cost,
		status,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const {
		data: { user },
		error: getUserError,
	} = await supabase.auth.getUser()

	if (getUserError) return redirect("/orders?error=Could not authenticate user")

	const { error: insertOrderError, status: insertOrderStatus } = await supabase.from(TableName.Orders).insert({
		category: validation.data?.category,
		subcategory: validation.data?.subcategory,
		cost: validation.data?.cost,
		status: validation.data?.status,
		user: user?.id,
	})

	if (insertOrderError) return redirect("/orders?error=Could not authenticate user")

	revalidatePath("/[locale]/orders")

	return insertOrderStatus
}
