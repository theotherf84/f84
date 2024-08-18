import Header from "components/header"
import type React from "react"

const Layout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<Header />
			<main className="mx-auto grid w-full max-w-6xl items-start gap-6 p-4 md:gap-8 md:p-8 bg-muted/40">{children}</main>
		</div>
	)
}

export default Layout
