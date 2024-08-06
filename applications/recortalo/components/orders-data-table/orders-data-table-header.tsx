"use client"

import { ColumnDef as ColumnDefinition } from "@tanstack/react-table"
import { Badge } from "shadcn/badge"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import { Order } from "types/tables.types"

export const columns: ColumnDefinition<Order>[] = [
	{
		accessorKey: "category",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
	},
	{
		accessorKey: "cost",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("cost"))
			const formatted = new Intl.NumberFormat("es-AR", {
				style: "currency",
				currency: "ARS",
			}).format(amount)

			return <div className="font-medium">{formatted}</div>
		},
		header: "Cost",
	},
	{
		accessorKey: "status",
		cell: ({ row }) => {
			const status = row.getValue("status") as string

			return (
				<Badge className="text-xs" variant={status === "Payed" ? "secondary" : "outline"}>
					{status}
				</Badge>
			)
		},
		header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
	},
	{
		accessorKey: "subcategory",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Subcategory" />,
	},
	{
		accessorKey: "user",
		header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
	},
]
