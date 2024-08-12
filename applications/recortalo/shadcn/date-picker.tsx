"use client"

import { format } from "date-fns"
import { classNames } from "helpers/class-names"
import { CalendarIcon } from "lucide-react"
import * as React from "react"
import { useState } from "react"
import { Button } from "shadcn/button"
import { Calendar } from "shadcn/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/popover"

export const DatePicker = () => {
	const [date, setDate] = useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" className={classNames("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
			</PopoverContent>
		</Popover>
	)
}
