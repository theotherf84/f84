"use client"

import { format } from "date-fns"
import { mergeClassNames } from "helpers/merge-class-names"
import { CalendarIcon } from "lucide-react"
import * as React from "react"
import { useState } from "react"
import type { SelectSingleEventHandler } from "react-day-picker"
import { Button } from "shadcn/button"
import { Calendar } from "shadcn/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/popover"

export const DatePicker = ({ date, onSelect }: { date: Date; onSelect: (date?: Date) => void }) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false)

	const handleOnSelect: SelectSingleEventHandler = (selected) => {
		setIsPopoverOpen(false)

		onSelect?.(selected)
	}

	return (
		<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" className={mergeClassNames("justify-between text-left font-normal", !date && "text-muted-foreground")}>
					{date ? format(date, "PPP") : <span>Pick a date</span>}
					<CalendarIcon className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar mode="single" selected={date} onSelect={handleOnSelect} initialFocus disabled={(date) => date > new Date()} />
			</PopoverContent>
		</Popover>
	)
}
