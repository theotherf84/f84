"use server"

import { formSchema } from "components/employees-add-form/employees-add-form-schema"
import { TableName } from "enumerations/table-name"
import { createClient } from "helpers/supabase/supabase-server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const validation = formSchema.safeParse({
		"first-name": formData?.get("first-name"),
		"last-name": formData?.get("last-name"),
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createClient()

	const { error: userError } = await supabase.auth.getUser()

	if (userError) return redirect("/staff?error=Could not authenticate user")

	const { error: insertError, status: insertStatus } = await supabase
		.from(TableName.Employees)
		.insert({ first_name: validation.data?.["first-name"], last_name: validation.data?.["last-name"] })

	if (insertError) return redirect("/staff?error=Could not authenticate user")

	revalidatePath("/staff")

	return insertStatus
}
