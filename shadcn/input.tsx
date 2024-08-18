import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"
import type { InputProperties } from "types/components"

const Input = React.forwardRef<HTMLInputElement, InputProperties>(({ className, type, ...properties }, reference) => (
	<input
		type={type}
		className={mergeClassNames(
			"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
			className,
		)}
		ref={reference}
		{...properties}
	/>
))

Input.displayName = "Input"

export { Input }