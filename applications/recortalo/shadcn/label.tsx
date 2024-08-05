import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps, cva as classVarianceAuthority } from "class-variance-authority"
import { classNames } from "helpers/class-names"
import * as React from "react"

const variants = classVarianceAuthority("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof variants>
>(({ className, ...properties }, reference) => <LabelPrimitive.Root ref={reference} className={classNames(variants(), className)} {...properties} />)

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
