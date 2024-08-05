"use client"

import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "shadcn/dropdown-menu"

export const UserDropdownMenuSignOutForm = () => {
	const router = useRouter()

	return (
		<DropdownMenuItem className="cursor-pointer" onClick={() => router?.push("/api/sign-out")}>
			Logout
		</DropdownMenuItem>
	)
}
