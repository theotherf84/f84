"use server"

import { formSchema } from "components/sign-in-forms/sign-in-form-schema"
import { createClient } from "helpers/supabase/supabase-server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const email = formData.get("email")
	const password = formData.get("password")

	const validation = formSchema.safeParse({
		email,
		password,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: validation?.data?.email,
		password: validation?.data?.password,
	})

	if (error) {
		return redirect("/sign-in?error=Could not authenticate user")
	}

	revalidatePath("/", "layout")
	redirect("/")
}
