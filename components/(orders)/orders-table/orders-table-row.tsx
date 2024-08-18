import { getFormattedLocaleDateString } from "helpers/get-formatted-locale-date-string"
import { getFormattedNameInitial } from "helpers/get-formatted-name-initial"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { Badge } from "shadcn/badge"
import { TableCell, TableRow } from "shadcn/table"

export const OrdersTableRow = ({ category, cost, created_at, employee, id, status, subcategory }: any) => (
	<TableRow>
		<TableCell>
			<Avatar>
				<AvatarFallback>
					{getFormattedNameInitial(employee?.first_name)}
					{getFormattedNameInitial(employee?.last_name)}
				</AvatarFallback>
			</Avatar>
		</TableCell>
		<TableCell>
			<div className="font-medium">{category}</div>
			<div className="hidden text-sm text-muted-foreground md:inline">{subcategory}</div>
		</TableCell>
		<TableCell className="hidden sm:table-cell">
			<Badge className="text-xs" variant={status === "Payed" ? "secondary" : "outline"}>
				{status}
			</Badge>
		</TableCell>
		<TableCell className="hidden md:table-cell">{getFormattedLocaleDateString(created_at)}</TableCell>
		<TableCell className="text-right">{cost}</TableCell>
	</TableRow>
)
