import { getFormattedLocaleDateString } from "helpers/get-formatted-locale-date-string"
import { getFormattedNameInitial } from "helpers/get-formatted-name-initial"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { TableCell, TableRow } from "shadcn/table"
import type { Employee } from "types/tables.types"

export const EmployeesTableRow = ({ created_at, first_name, last_name }: Employee) => (
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
		<TableCell className="font-medium">{last_name}</TableCell>
		<TableCell className="hidden md:table-cell">{getFormattedLocaleDateString(created_at)}</TableCell>
	</TableRow>
)
