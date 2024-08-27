"use client"

import {
	type ColumnFiltersState,
	type SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { useState } from "react"
import { DataTablePagination } from "shadcn/data-table/data-table-pagination"
import { DataTableToolbar } from "shadcn/data-table/data-table-toolbar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "shadcn/table"
import type { DataTableProperties } from "types/data-table.types"

export const DataTable = <TData, TValue>({ columns, data }: DataTableProperties<TData, TValue>) => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
		},
	})

	const hasData = !!table.getRowModel().rows?.length

	return (
		<div className="flex flex-col gap-6">
			<DataTableToolbar table={table} />
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{hasData &&
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
								))}
							</TableRow>
						))}
					{!hasData && <TableDataPlaceholder />}
				</TableBody>
			</Table>
			<DataTablePagination table={table} />
		</div>
	)
}
