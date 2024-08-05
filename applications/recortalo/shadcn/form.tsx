"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import { classNames } from "helpers/class-names"
import {
	useContext,
	type HTMLAttributes,
	useId,
	type ComponentPropsWithoutRef as ComponentPropertiesWithoutReference,
	forwardRef as forwardReference,
	createContext,
	type ElementRef as ElementReference,
} from "react"
import { Controller, type ControllerProps, type FieldPath, type FieldValues, FormProvider, useFormContext } from "react-hook-form"

const Form = FormProvider

type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
	name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	...properties
}: ControllerProps<TFieldValues, TName>) => (
	<FormFieldContext.Provider value={{ name: properties.name }}>
		<Controller {...properties} />
	</FormFieldContext.Provider>
)

const useFormField = () => {
	const fieldContext = useContext(FormFieldContext)
	const itemContext = useContext(FormItemContext)

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

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = forwardReference<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => {
	const identifier = useId()

	return (
		<FormItemContext.Provider value={{ id: identifier }}>
			<div ref={reference} className={classNames("space-y-2", className)} {...properties} />
		</FormItemContext.Provider>
	)
})

FormItem.displayName = "FormItem"

const FormLabel = forwardReference<ElementReference<typeof LabelPrimitive.Root>, ComponentPropertiesWithoutReference<typeof LabelPrimitive.Root>>(
	({ className, ...properties }, reference) => {
		const { error, formItemId } = useFormField()

		return <LabelPrimitive.Label ref={reference} className={classNames(error && "text-destructive", className)} htmlFor={formItemId} {...properties} />
	},
)

FormLabel.displayName = "FormLabel"

const FormControl = forwardReference<ElementReference<typeof Slot>, ComponentPropertiesWithoutReference<typeof Slot>>(({ ...properties }, reference) => {
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

const FormDescription = forwardReference<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(({ className, ...properties }, reference) => {
	const { formDescriptionId: formDescriptionIdentifier } = useFormField()

	return <p ref={reference} id={formDescriptionIdentifier} className={classNames("text-sm text-muted-foreground", className)} {...properties} />
})

FormDescription.displayName = "FormDescription"

const FormMessage = forwardReference<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(({ className, children, ...properties }, reference) => {
	const { error, formMessageId: formMessageIdentifier } = useFormField()
	const body = error ? String(error?.message) : children

	if (!body) return null

	return (
		<p ref={reference} id={formMessageIdentifier} className={classNames("text-sm font-medium text-destructive", className)} {...properties}>
			{body}
		</p>
	)
})

FormMessage.displayName = "FormMessage"

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
