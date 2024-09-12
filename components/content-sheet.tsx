"use client"

import { Clone } from "components/clone"
import { useState } from "react"
import { Button } from "shadcn/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "shadcn/sheet"
import type { ContentSheetProperties } from "types/components"

export const ContentSheet = ({ children, messages, ...properties }: ContentSheetProperties) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOnSheetClose = () => setIsOpen(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="secondary">{messages.action}</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-6 w-full md:w-auto">
				<SheetHeader className="py-4">
					<SheetTitle>{messages.title}</SheetTitle>
					<SheetDescription className="text-left text-muted-foreground">{messages.subtitle}</SheetDescription>
				</SheetHeader>
				<Clone {...properties} onClose={handleOnSheetClose}>
					{children}
				</Clone>
			</SheetContent>
		</Sheet>
	)
}
