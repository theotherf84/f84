"use server"

import { formSchema } from "components/update-password-forms/update-password-form-schema"
import { createClient } from "helpers/supabase/supabase-server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const password = formData.get("password")
	const passwordConfirmation = formData.get("password-confirmation")

	const validation = formSchema.safeParse({
		password,
		passwordConfirmation,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const { error: userError } = await supabase.auth.getUser()

	if (userError) return redirect("/settings/categories?error=Could not authenticate user")

	const { data, error: updateError } = await supabase.auth.updateUser({ password: validation?.data?.password })

	if (updateError) return redirect("/settings/categories?error=Could not authenticate user")

	revalidatePath("/settings/categories")

	return data
}
