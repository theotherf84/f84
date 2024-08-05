import { Badge } from "shadcn/badge"
import { TableCell, TableRow } from "shadcn/table"
import type { Order } from "types/tables.types"

export const OrdersTableRow = ({ category, cost, created_at, id, status, subcategory, user }: Order) => (
	<TableRow>
		<TableCell>
			<div className="font-medium">{category}</div>
			<div className="hidden text-sm text-muted-foreground md:inline">{subcategory}</div>
		</TableCell>
		<TableCell className="hidden sm:table-cell">
			<Badge className="text-xs" variant={status === "Payed" ? "secondary" : "outline"}>
				{status}
			</Badge>
		</TableCell>
		<TableCell className="hidden md:table-cell">
			{new Date(created_at).toLocaleDateString("es-AR", {
				timeZone: "UTC",
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			})}
		</TableCell>
		<TableCell className="text-right">{cost}</TableCell>
	</TableRow>
)
