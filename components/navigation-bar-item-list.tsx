"use client"

import { mergeClassNames } from "helpers/merge-class-names"
import Link from "next/link"
import { useMemo } from "react"
import { Button } from "shadcn/button"
import type { NavigationBarItemListProperties } from "types/components"

export const NavigationBarItemList = ({ isOnSidebar, messages }: NavigationBarItemListProperties) => {
	const items = useMemo(
		() => [
			{
				label: messages.orders,
				path: "/orders",
			},
			{
				label: messages.clients,
				path: "/clients",
			},
			{
				label: messages.employees,
				path: "/employees",
			},
			{
				label: messages.categories,
				path: "/categories",
			},
		],
		[messages],
	)

	return items?.map(({ label, path }) => (
		<Button asChild className={mergeClassNames(isOnSidebar && "justify-center")} key={label} variant="ghost">
			<Link href={path}>{label}</Link>
		</Button>
	))
}
