import { classNames } from "helpers/class-names"
import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDown, EyeIcon } from "lucide-react"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "shadcn/dropdown-menu"
import { DataTableColumnHeaderProperties } from "types/data-table.types"

export function DataTableColumnHeader<TData, TValue>({ column, title, className }: DataTableColumnHeaderProperties<TData, TValue>) {
	if (!column.getCanSort()) return <div className={classNames(className)}>{title}</div>

	return (
		<div className={classNames("flex items-center space-x-2", className)}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent">
						<span>{title}</span>
						{column.getIsSorted() === "desc" ? (
							<ArrowDownIcon className="ml-2 h-4 w-4" />
						) : column.getIsSorted() === "asc" ? (
							<ArrowUpIcon className="ml-2 h-4 w-4" />
						) : (
							<ChevronsUpDown className="ml-2 h-4 w-4" />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem onClick={() => column.toggleSorting(false)}>
						<ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
						Ascending
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.toggleSorting(true)}>
						<ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
						Descending
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
						<EyeIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
						Hide
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
