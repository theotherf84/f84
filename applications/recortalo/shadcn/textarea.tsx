import { classNames } from "helpers/class-names"
import { type TextareaHTMLAttributes, forwardRef } from "react"

export interface TextareaProperties extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProperties>(({ className, ...properties }, reference) => {
	return (
		<textarea
			className={classNames(
				"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			ref={reference}
			{...properties}
		/>
	)
})

Textarea.displayName = "Textarea"

export { Textarea }
