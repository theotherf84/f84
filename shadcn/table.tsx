import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...properties }, reference) => (
	<div className="relative w-full overflow-auto">
		<table ref={reference} className={mergeClassNames("w-full caption-bottom text-sm", className)} {...properties} />
	</div>
))

Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...properties }, reference) => (
	<thead ref={reference} className={mergeClassNames("[&_tr]:border-b", className)} {...properties} />
))

TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...properties }, reference) => (
	<tbody ref={reference} className={mergeClassNames("[&_tr:last-child]:border-0", className)} {...properties} />
))

TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...properties }, reference) => (
	<tfoot ref={reference} className={mergeClassNames("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...properties} />
))

TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...properties }, reference) => (
	<tr ref={reference} className={mergeClassNames("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)} {...properties} />
))

TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...properties }, reference) => (
	<th ref={reference} className={mergeClassNames("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)} {...properties} />
))

TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...properties }, reference) => (
	<td ref={reference} className={mergeClassNames("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...properties} />
))

TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(({ className, ...properties }, reference) => (
	<caption ref={reference} className={mergeClassNames("mt-4 text-sm text-muted-foreground", className)} {...properties} />
))

TableCaption.displayName = "TableCaption"

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
