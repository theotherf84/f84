"use client"

import type { ColumnDef as ColumnDefinition } from "@tanstack/react-table"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { Badge } from "shadcn/badge"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import type { Employee, OrderWithEmployee } from "types/tables.types"

export const columns: ColumnDefinition<OrderWithEmployee>[] = [
	{
		accessorKey: "category",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
	},
	{
		accessorKey: "cost",
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("cost"))
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
		accessorKey: "employee",
		cell: ({ row }) => {
			const { first_name, last_name } = row.getValue("employee") as Employee

			return (
				<Avatar>
					<AvatarFallback>
						{first_name.charAt(0).toUpperCase()}
						{last_name?.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			)
		},
		filterFn: (row, columnId, filterValue) => {
			const { first_name, last_name } = row.getValue(columnId) as Employee

			const fullName = `${first_name} ${last_name}`

			return fullName.includes(filterValue)
		},
		header: ({ column }) => <DataTableColumnHeader column={column} title="Employee" />,
	},
]
