"use client"

import type { ComponentProps } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "shadcn/button"

export const SubmitButton = ({ children, formState, ...properties }: ComponentProps<"button"> & { formState: any }) => {
	const { pending } = useFormStatus()

	const isSubmitting = formState?.isSubmitting

	return (
		<Button type="submit" aria-disabled={pending || isSubmitting} disabled={pending || isSubmitting} {...properties}>
			{children}
		</Button>
	)
}
