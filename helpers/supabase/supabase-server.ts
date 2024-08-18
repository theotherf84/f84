import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "types/database.types"

export const createClient = () => {
	const cookieStore = cookies()

	const supabaseAnonimousKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
	const supabaseProject = process.env.NEXT_PUBLIC_SUPABASE_URL || ""

	return createServerClient<Database>(supabaseProject, supabaseAnonimousKey, {
		cookies: {
			getAll() {
				return cookieStore.getAll()
			},
			setAll(cookiesToSet) {
				try {
					// biome-ignore lint/complexity/noForEach: <explanation>
					cookiesToSet.forEach(({ name, value, options }) => {
						cookieStore.set(name, value, options)
					})
				} catch (error) {
					// The `set` method was called from a server component.
					// This can be ignored if you have middleware refreshing user sessions.
				}
			},
		},
	})
}
