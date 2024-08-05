import { createClient } from "helpers/supabase/supabase-server"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export const GET = async (_: NextRequest) => {
	const supabase = createClient()

	const { error } = await supabase.auth.signOut()

	if (error) error

	return redirect("/sign-in")
}
