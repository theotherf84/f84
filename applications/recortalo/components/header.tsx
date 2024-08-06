import { LanguageSwitcher } from "components/language-switcher"
import { UserDropdownMenu } from "components/user-dropdown-menu/user-dropdown-menu"
import { Menu, Scissors } from "lucide-react"
import Link from "next/link"
import { Button } from "shadcn/button"
import { ColorThemeToggle } from "shadcn/color-theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "shadcn/sheet"

const navigationItems = [
	{
		label: "Orders",
		path: "/orders",
		protected: false,
	},
]

const Header = () => (
	<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
		<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center justify-between md:gap-5 md:text-sm lg:gap-6">
			<Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
				<Scissors className="h-6 w-6" />
				<span className="sr-only">Recortalo</span>
			</Link>
			{navigationItems?.map(({ label, path }) => (
				<Link className="text-muted-foreground transition-colors hover:text-foreground" href={path} key={label}>
					{label}
				</Link>
			))}
		</nav>
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="shrink-0 md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<nav className="grid gap-6 text-lg font-medium">
					<Link href="#" className="flex items-center gap-2 text-lg font-semibold">
						<Scissors className="h-6 w-6" />
						<span className="sr-only">Recortalo</span>
					</Link>
					{navigationItems?.map(({ label, path }) => (
						<Link className="text-muted-foreground hover:text-foreground" href={path} key={label}>
							{label}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
		<div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
			<UserDropdownMenu />
			<ColorThemeToggle />
		</div>
	</header>
)

export default Header
