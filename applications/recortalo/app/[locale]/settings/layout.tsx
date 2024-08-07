import Header from "components/header"
import { SettingsNavigationMenu } from "components/settings-navigation-menu"
import * as React from "react"

const Layout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<Header />
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-muted/40">
				<div className="mx-auto grid w-full max-w-6xl gap-2">
					<h1 className="text-3xl font-semibold">Settings</h1>
				</div>
				<div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
					<SettingsNavigationMenu />
					{children}
				</div>
			</main>
		</div>
	)
}

export default Layout
