import { getUserSession } from "../../services/get-user-session"
import { CircleUser } from "lucide-react"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "shadcn/dropdown-menu"
import { UserDropdownMenuSignOutForm } from "./user-dropdown-menu-sign-out-form"
import Link from "next/link"

export const UserDropdownMenu = async () => {
	const session = await getUserSession()
	const metadata = session?.user?.user_metadata

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="h-8 w-8 px-0 rounded-full">
					<CircleUser className="h-5 w-5" />
					<span className="sr-only">Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>{metadata?.first_name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer">
					<Link href="/settings">Settings</Link>
				</DropdownMenuItem>
				<DropdownMenuItem disabled>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<UserDropdownMenuSignOutForm />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
