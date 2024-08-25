import { getFormattedNameInitial } from "helpers/get-formatted-name-initial"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { TableCell, TableRow } from "shadcn/table"
import type { Client } from "types/tables.types"

export const ClientsTableRow = ({ email, first_name, last_name }: Client) => (
	<TableRow>
		<TableCell>
			<Avatar>
				<AvatarFallback>
					{getFormattedNameInitial(first_name)}
					{getFormattedNameInitial(last_name)}
				</AvatarFallback>
			</Avatar>
		</TableCell>
		<TableCell className="font-medium">{first_name}</TableCell>
		<TableCell className="hidden md:table-cell font-medium">{last_name}</TableCell>
		<TableCell>{email}</TableCell>
	</TableRow>
)
