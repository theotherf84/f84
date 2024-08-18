import { UserDropdownMenuSignOutForm } from "components/user-dropdown-menu/user-dropdown-menu-sign-out-form"
import { getFormattedNameInitial } from "helpers/get-formatted-name-initial"
import { getUserSession } from "services/get-user-session"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "shadcn/dropdown-menu"

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
								{getFormattedNameInitial(userMetadata?.first_name)}
								{getFormattedNameInitial(userMetadata?.last_name)}
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
					<UserDropdownMenuSignOutForm />
				</DropdownMenuContent>
			</DropdownMenu>
		)
	)
}
