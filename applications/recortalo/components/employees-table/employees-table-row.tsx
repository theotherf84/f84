import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar } from "shadcn/avatar"
import { TableCell, TableRow } from "shadcn/table"
import type { Employee } from "types/tables.types"

export const EmployeesTableRow = ({ created_at, first_name, last_name }: Employee) => (
	<TableRow>
		<TableCell className="font-medium">
			<Avatar>
				<AvatarFallback>
					{first_name.charAt(0).toUpperCase()}
					{last_name?.charAt(0).toUpperCase()}
				</AvatarFallback>
			</Avatar>
		</TableCell>
		<TableCell className="font-medium">{first_name}</TableCell>
		<TableCell className="font-medium">{last_name}</TableCell>
		<TableCell className="hidden md:table-cell">
			{new Date(created_at).toLocaleDateString("es-AR", {
				timeZone: "UTC",
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			})}
		</TableCell>
	</TableRow>
)
