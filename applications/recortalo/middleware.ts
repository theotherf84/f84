import { match as matchLocale } from "@formatjs/intl-localematcher"
import { defaultLocale, supportedLocales } from "helpers/internationalisation"
import { updateUserSession } from "helpers/supabase/supabase-middleware"
import Negotiator from "negotiator"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const getPreferredLocale = (request: NextRequest): string | undefined => {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {}

	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

	// @ts-ignore locales are readonly
	const locales: string[] = supportedLocales

	// Use negotiator and intl-localematcher to get best locale
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

	const locale = matchLocale(languages, locales, defaultLocale)

	return locale
}

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	// Ignore files in `public` manually.
	// if (["/favicon.ico", "/product-placeholder-image.svg"].includes(pathname)) return

	// Attempt to refresh an expired session
	const isUserAuthenticated = await updateUserSession(request)

	if (!isUserAuthenticated) {
		const shouldProtectPathname = pathname.includes("/sign-in") || pathname.includes("/sign-up")

		if (!shouldProtectPathname) return NextResponse.redirect(new URL("/sign-in", request.url))
	}

	// Check if there is any supported locale in the pathname
	const pathnameHasLocale = supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

	if (pathnameHasLocale) return

	// Redirect if there is no locale
	const locale = getPreferredLocale(request)

	request.nextUrl.pathname = `/${locale}${pathname}`

	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
