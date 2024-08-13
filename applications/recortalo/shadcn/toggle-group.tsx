"use client"

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import type { VariantProps as VariantProperties } from "class-variance-authority"
import { mergeClassNames } from "helpers/merge-class-names"
import {
	type ComponentPropsWithoutRef as ComponentPropertiesWithoutReference,
	type ElementRef as ElementReference,
	createContext,
	forwardRef as forwardReference,
	useContext,
} from "react"
import { toggleVariants } from "shadcn/toggle"

const ToggleGroupContext = createContext<VariantProperties<typeof toggleVariants>>({
	size: "default",
	variant: "default",
})

const ToggleGroup = forwardReference<
	ElementReference<typeof ToggleGroupPrimitive.Root>,
	ComponentPropertiesWithoutReference<typeof ToggleGroupPrimitive.Root> & VariantProperties<typeof toggleVariants>
>(({ className, variant, size, children, ...properties }, reference) => (
	<ToggleGroupPrimitive.Root ref={reference} className={mergeClassNames("flex items-center justify-center gap-1", className)} {...properties}>
		<ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
	</ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = forwardReference<
	ElementReference<typeof ToggleGroupPrimitive.Item>,
	ComponentPropertiesWithoutReference<typeof ToggleGroupPrimitive.Item> & VariantProperties<typeof toggleVariants>
>(({ className, children, variant, size, ...properties }, reference) => {
	const context = useContext(ToggleGroupContext)

	return (
		<ToggleGroupPrimitive.Item
			ref={reference}
			className={mergeClassNames(
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size,
				}),
				className,
			)}
			{...properties}
		>
			{children}
		</ToggleGroupPrimitive.Item>
	)
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
