import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva as classVarianceAuthority } from "class-variance-authority"
import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"

const variants = classVarianceAuthority(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
)

interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProperties>(({ className, variant, size, asChild = false, ...properties }, reference) => {
	const Component = asChild ? Slot : "button"

	return <Component className={mergeClassNames(variants({ variant, size, className }))} ref={reference} {...properties} />
})

Button.displayName = "Button"

export { Button, type ButtonProperties, variants as buttonVariants }