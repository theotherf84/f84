import { createClient } from "helpers/supabase/supabase-server"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
	const searchParameters = request.nextUrl.searchParams

	const code = searchParameters?.get("code") || ""

	const supabase = createClient()

	const { error } = await supabase.auth.exchangeCodeForSession(code)

	if (error) redirect("/sign-in")

	return redirect("/account/update-password")
}
