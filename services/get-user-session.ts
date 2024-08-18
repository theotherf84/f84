import { createClient } from "helpers/supabase/supabase-server"

export const getUserSession = async () => {
	const supabase = createClient()

	const {
		data: { session },
		error,
	} = await supabase.auth.getSession()

	if (error) return

	return session
}
