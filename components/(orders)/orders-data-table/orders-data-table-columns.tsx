"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { getFormattedCurrencyAmount } from "helpers/get-formatted-currency-amount"
import { getFormattedNameInitial } from "helpers/get-formatted-name-initial"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { Badge } from "shadcn/badge"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import type { Employee, OrderWithEmployee } from "types/tables.types"

export const columns: ColumnDef<OrderWithEmployee>[] = [
	{
		accessorKey: "category",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
	},
	{
		accessorKey: "cost",
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("cost"))

			return <div className="font-medium">{getFormattedCurrencyAmount(amount)}</div>
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
						{getFormattedNameInitial(first_name)}
						{getFormattedNameInitial(last_name)}
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
