"use server"

import { formSchema } from "components/categories-forms/categories-add-form-schema"
import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const name = formData.get("name")

	const validation = formSchema.safeParse({
		name,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser()

	if (userError) return redirect("/settings/categories?error=Could not authenticate user")

	const { error: insertError, status: insertStatus } = await supabase.from(TableName.Categories).insert({ name: validation.data?.name })

	if (insertError) return redirect("/settings/categories?error=Could not authenticate user")

	revalidatePath("/settings/categories")

	return insertStatus
}
