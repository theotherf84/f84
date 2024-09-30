import type { Viewport } from "next"
import "styles/globals.css"
import { ThemeProvider } from "providers/theme-provider"
import type { ReactNode } from "react"

export const metadata = {
	title: "",
	description: "",
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

const Layout = ({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) => (
	<html lang={locale} suppressHydrationWarning>
		<body>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				{children}
			</ThemeProvider>
		</body>
	</html>
)

export default Layout
