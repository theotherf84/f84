import ThemeProvider from "components/theme-provider"
import type { Viewport } from "next"
import "styles/globals.css"

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

const Layout = ({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) => (
	<html lang={locale} suppressHydrationWarning>
		<body className="bg-background text-foreground">
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				{children}
			</ThemeProvider>
		</body>
	</html>
)

export default Layout
