import { createSupabaseClient } from "helpers/supabase/supabase-server"

export const getUserSession = async () => {
	const supabase = createSupabaseClient()

	const {
		data: { session },
		error,
	} = await supabase.auth.getSession()

	if (error) return

	return session
}
