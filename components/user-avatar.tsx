import { getStringInitialCharacter } from "helpers/get-string-initial-character"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import type { UserAvatarProperties } from "types/components"

export const UserAvatar = ({ firstName, lastName }: UserAvatarProperties) => (
	<Avatar>
		<AvatarFallback>
			{getStringInitialCharacter(firstName)}
			{lastName && getStringInitialCharacter(lastName)}
		</AvatarFallback>
	</Avatar>
)
