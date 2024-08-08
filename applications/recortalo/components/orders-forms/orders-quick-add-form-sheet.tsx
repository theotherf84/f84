"use client"

import { SheetHeader, SheetTitle, SheetDescription, Sheet, SheetContent, SheetTrigger } from "shadcn/sheet"
import { Button } from "shadcn/button"
import { QuickAddOrderForm } from "components/orders-forms/orders-quick-add-form"
import { useState } from "react"
import { QuickAddOrderFormSheetProperties } from "types/forms"

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
