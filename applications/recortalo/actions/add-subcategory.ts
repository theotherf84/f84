"use server"

import { formSchema } from "components/subcategories-forms/subcategories-add-form-schema"
import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const category = formData.get("category")
	const name = formData.get("name")

	const validation = formSchema.safeParse({
		category,
		name,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const { error: userError } = await supabase.auth.getUser()

	if (userError) return redirect("/settings/subcategories?error=Could not authenticate user")

	const { error: insertError, status: insertStatus } = await supabase
		.from(TableName.Subcategories)
		.insert({ category: validation.data?.category, name: validation.data?.name })

	if (insertError) return redirect("/settings/subcategories?error=Could not authenticate user")

	revalidatePath("/settings/subcategories")

	return insertStatus
}
