import Header from "components/header"

const Layout = ({
	children,
}: {
	children: React.ReactNode
}) => (
	<div className="flex min-h-screen w-full flex-col">
		<Header />
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">{children}</main>
	</div>
)

export default Layout
