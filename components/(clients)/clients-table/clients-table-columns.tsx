"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import type { Client } from "types/tables.types"

export const columns: ColumnDef<Client>[] = [
	{
		accessorKey: "first_name",
		header: ({ column }) => <DataTableColumnHeader column={column} title="First name" />,
	},
	{
		accessorKey: "last_name",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Last name" />,
	},
	{
		accessorKey: "email",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
	},
]
