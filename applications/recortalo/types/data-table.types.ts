import { Column, ColumnDef as ColumnDefinition, Table } from "@tanstack/react-table"

export interface DataTableColumnHeaderProperties<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>
	title: string
}

export interface DataTablePaginationProperties<TData> {
	table: Table<TData>
}

export interface DataTableProperties<TData, TValue> {
	columns: ColumnDefinition<TData, TValue>[]
	data: TData[]
}

export interface DataTableViewOptionsProperties<TData> {
	table: Table<TData>
}
