"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"
import { Controller, type ControllerProps, type FieldPath, type FieldValues, FormProvider, useFormContext } from "react-hook-form"

const Form = FormProvider

type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
	name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	...properties
}: ControllerProps<TFieldValues, TName>) => (
	<FormFieldContext.Provider value={{ name: properties.name }}>
		<Controller {...properties} />
	</FormFieldContext.Provider>
)

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext)
	const itemContext = React.useContext(FormItemContext)

	const { getFieldState, formState } = useFormContext()

	const fieldState = getFieldState(fieldContext.name, formState)

	if (!fieldContext) throw new Error("useFormField should be used within <FormField>")

	const { id: identifier } = itemContext

	return {
		id: identifier,
		name: fieldContext.name,
		formItemId: `${identifier}-form-item`,
		formDescriptionId: `${identifier}-form-item-description`,
		formMessageId: `${identifier}-form-item-message`,
		...fieldState,
	}
}

type FormItemContextValue = {
	id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => {
	const identifier = React.useId()

	return (
		<FormItemContext.Provider value={{ id: identifier }}>
			<div ref={reference} className={mergeClassNames("space-y-2", className)} {...properties} />
		</FormItemContext.Provider>
	)
})

FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
	({ className, ...properties }, reference) => {
		const { error, formItemId } = useFormField()

		return <LabelPrimitive.Label ref={reference} className={mergeClassNames(error && "text-destructive", className)} htmlFor={formItemId} {...properties} />
	},
)

FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(({ ...properties }, reference) => {
	const { error, formItemId, formDescriptionId, formDescriptionId: formDescriptionIdentifier } = useFormField()

	return (
		<Slot
			ref={reference}
			id={formItemId}
			aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formDescriptionIdentifier}`}
			aria-invalid={!!error}
			{...properties}
		/>
	)
})

FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...properties }, reference) => {
	const { formDescriptionId: formDescriptionIdentifier } = useFormField()

	return <p ref={reference} id={formDescriptionIdentifier} className={mergeClassNames("text-sm text-muted-foreground", className)} {...properties} />
})

FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, children, ...properties }, reference) => {
	const { error, formMessageId: formMessageIdentifier } = useFormField()

	const body = error ? String(error?.message) : children

	if (!body) return null

	return (
		<p ref={reference} id={formMessageIdentifier} className={mergeClassNames("text-sm font-medium text-destructive", className)} {...properties}>
			{body}
		</p>
	)
})

FormMessage.displayName = "FormMessage"

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
