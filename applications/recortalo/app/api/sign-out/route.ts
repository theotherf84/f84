import { createClient } from "helpers/supabase/supabase-server"
import { redirect } from "next/navigation"

export async function GET(_: Request) {
	const supabase = createClient()

	const { error } = await supabase.auth.signOut()

	if (error) error

	return redirect("/sign-in")
}
