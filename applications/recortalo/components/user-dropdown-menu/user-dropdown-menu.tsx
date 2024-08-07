import { getUserSession } from "services/get-user-session"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "shadcn/dropdown-menu"
import { UserDropdownMenuSignOutForm } from "components/user-dropdown-menu/user-dropdown-menu-sign-out-form"
import Link from "next/link"
import { Avatar, AvatarFallback } from "shadcn/avatar"

export const UserDropdownMenu = async () => {
	const session = await getUserSession()

	const userMetadata = session?.user?.user_metadata

	return (
		session && (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon" className="h-8 w-8 px-0 rounded-full">
						<Avatar>
							<AvatarFallback>
								{userMetadata?.first_name.charAt(0).toUpperCase()}
								{userMetadata?.last_name?.charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<span className="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>
						{userMetadata?.first_name} {userMetadata?.last_name}
					</DropdownMenuLabel>
					<DropdownMenuLabel className="text-sm text-muted-foreground">{session?.user?.email}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="cursor-pointer">
						<Link href="/settings">Settings</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<UserDropdownMenuSignOutForm />
				</DropdownMenuContent>
			</DropdownMenu>
		)
	)
}
