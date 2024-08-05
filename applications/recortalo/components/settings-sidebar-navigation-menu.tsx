"use client"

import { classNames } from "helpers/class-names"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SettingsSidebarNavigationMenu = () => {
	const pathname = usePathname()

	return (
		<nav className="grid gap-6 text-lg text-muted-foreground">
			<Link href="/settings/categories" className={classNames(pathname?.includes("/categories") && "text-foreground")}>
				Categories
			</Link>
			<Link href="/settings/subcategories" className={classNames(pathname?.includes("/subcategories") && "text-foreground")}>
				Subcategories
			</Link>
		</nav>
	)
}
