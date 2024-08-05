"use server"

import { createClient } from "helpers/supabase/supabase-server"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { formSchema } from "components/password-recovery-forms/password-recovery-form-schema"

export const action = async (formData: FormData) => {
	const origin = headers().get("origin")

	const email = formData.get("email")

	const validation = formSchema.safeParse({
		email,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const { error } = await supabase.auth.resetPasswordForEmail(validation?.data?.email, {
		redirectTo: `${origin}/api/update-password`,
	})

	if (error) {
		return redirect("/password-recovery?error=Could not authenticate user")
	}

	redirect("/sign-in")
}
