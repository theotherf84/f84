import { TableCell, TableRow } from "shadcn/table"
import type { Category } from "types/tables.types"

export const CategoriesTableRow = ({ created_at, id, name }: Category) => (
	<TableRow>
		<TableCell>
			<div className="font-medium">{name}</div>
		</TableCell>
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
