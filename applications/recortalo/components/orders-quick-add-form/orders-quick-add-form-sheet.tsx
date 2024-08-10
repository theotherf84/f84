"use client"

import { QuickAddOrderForm } from "components/orders-quick-add-form/orders-quick-add-form"
import { useState } from "react"
import { Button } from "shadcn/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "shadcn/sheet"
import type { QuickAddOrderFormSheetProperties } from "types/forms"

export const QuickAddOrderFormSheet = ({ translations, ...properties }: QuickAddOrderFormSheetProperties) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOnSheetClose = () => setIsOpen(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="secondary">{translations?.quickAction}</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{translations?.title}</SheetTitle>
					<SheetDescription className="text-left text-muted-foreground">{translations?.headline as string}</SheetDescription>
				</SheetHeader>
				<QuickAddOrderForm onSubmit={handleOnSheetClose} {...properties} />
			</SheetContent>
		</Sheet>
	)
}
