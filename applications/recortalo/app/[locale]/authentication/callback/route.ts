import { createClient } from "helpers/supabase/supabase-server"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
	const { origin, searchParams } = new URL(request.url)

	const code = searchParams.get("code")

	if (code) {
		const supabase = createClient()

		await supabase.auth.exchangeCodeForSession(code)
	}

	return NextResponse.redirect(`${origin}/protected`)
}
