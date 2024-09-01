import { createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"
import type { Database } from "types/database.types"

export const updateUserSession = async (request: NextRequest) => {
	// Create an unmodified response
	const response = NextResponse.next({
		request,
	})

	const supabaseAnonimousKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
	const supabaseProject = process.env.NEXT_PUBLIC_SUPABASE_URL || ""

	const supabase = createServerClient<Database>(supabaseProject, supabaseAnonimousKey, {
		cookies: {
			getAll() {
				return request.cookies.getAll()
			},
			setAll(cookiesToSet) {
				// biome-ignore lint/complexity/noForEach: <explanation>
				cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))

				// biome-ignore lint/complexity/noForEach: <explanation>
				cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
			},
		},
	})

	// This will refresh session if expired, required for server components
	// https://supabase.com/docs/guides/auth/server-side/nextjs
	const {
		data: { user },
	} = await supabase.auth.getUser()

	return !!user
}
