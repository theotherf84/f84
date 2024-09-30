import Header from "components/header"
import type React from "react"

const Layout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<>
			<Header />
			<main className="grid gap-6 h-screen">{children}</main>
		</>
	)
}

export default Layout
