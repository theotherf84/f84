"use client"

import { SheetHeader, SheetTitle, SheetDescription, Sheet, SheetContent, SheetTrigger } from "shadcn/sheet"
import { Button } from "shadcn/button"
import { QuickAddOrderForm } from "components/orders-forms/orders-quick-add-form"
import { useState } from "react"

export const QuickAddOrderFormSheet = ({ categories, subcategories, translations }: { categories: any; subcategories: any; translations: any }) => {
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
					<SheetDescription className="text-left text-muted-foreground">{translations?.headline}</SheetDescription>
				</SheetHeader>
				<QuickAddOrderForm categories={categories} subcategories={subcategories} onFormSubmit={handleOnSheetClose} />
			</SheetContent>
		</Sheet>
	)
}
