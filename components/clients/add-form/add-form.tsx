"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "actions/add-client"
import { formSchema } from "components/clients/add-form/add-form-schema"
import { SubmitButton } from "components/submit-button"
import { mergeClassNames } from "helpers/merge-class-names"
import { type SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "shadcn/form"
import { HistoricDatePicker } from "shadcn/historic-date-picker"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"
import { PhoneInput, getPhoneData } from "shadcn/phone-number-input"
import type { AddClientFormFieldValues, AddClientFormProperties } from "types/forms"

export const AddClientForm = ({ messages }: AddClientFormProperties) => {
	const defaultValues: Partial<AddClientFormFieldValues> = {}

	const form = useForm<AddClientFormFieldValues>({
		defaultValues,
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
	})

	const { fields, append } = useFieldArray({
		name: "social-media-profiles",
		control: form.control,
	})

	const handleOnSubmit: SubmitHandler<AddClientFormFieldValues> = async (data) => {
		const phoneData = getPhoneData(data["phone-number"])

		if (phoneData.isValid) {
			const statusCode = await action(data)

			if (statusCode === 201) return
		}

		form.setError("phone-number", {
			type: "manual",
			message: "Invalid phone number",
		})

		return
	}

	return (
		<form className="w-full" onSubmit={form.handleSubmit(handleOnSubmit)}>
			<Card className="flex flex-col">
				<CardHeader>
					<CardTitle>{messages?.forms?.addClient.title}</CardTitle>
					<CardDescription>{messages?.forms?.addClient.subtitle}</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<Form {...form}>
						<div className="flex flex-col gap-2">
							<FormField
								control={form.control}
								name="first-name"
								render={({ field }) => (
									<FormItem>
										<FormLabel asChild>
											<Label htmlFor="first-name">{messages?.inputs?.firstName.label}</Label>
										</FormLabel>
										<FormControl>
											<Input placeholder={messages?.inputs?.firstName.placeholder} {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<FormField
								control={form.control}
								name="last-name"
								render={({ field }) => (
									<FormItem>
										<FormLabel asChild>
											<Label htmlFor="last-name">{messages?.inputs?.lastName.label}</Label>
										</FormLabel>
										<FormControl>
											<Input placeholder={messages?.inputs?.lastName.label} {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid gap-3">
							<FormField
								control={form.control}
								name="date-of-birth"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel htmlFor="date-of-birth" asChild>
											<Label>{messages?.inputs?.date.label}</Label>
										</FormLabel>
										<FormControl>
											<HistoricDatePicker date={field.value} setDate={field.onChange} />
										</FormControl>
										<FormDescription>{messages?.inputs?.date.label}</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid gap-3">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel htmlFor="email" asChild>
											<Label htmlFor="email">{messages?.inputs?.email.label}</Label>
										</FormLabel>
										<FormControl>
											<Input placeholder={messages?.inputs?.email.placeholder} {...field} />
										</FormControl>
										<FormDescription>{messages?.inputs?.email.description}</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid gap-3">
							<FormField
								control={form.control}
								name="phone-number"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="phone-number" asChild>
											<Label>{messages?.inputs?.phoneNumber.label}</Label>
										</FormLabel>
										<FormControl>
											<PhoneInput {...field} />
										</FormControl>
										<FormDescription>{messages?.inputs?.phoneNumber.description}</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid gap-3">
							{fields.map((field, index) => (
								<FormField
									control={form.control}
									key={field.id}
									name={`social-media-profiles.${index}.value`}
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className={mergeClassNames(index !== 0 && "sr-only")} asChild>
												<Label>Social profiles</Label>
											</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ value: "" })}>
								Add a link
							</Button>
							<FormDescription> Add links to your website, blog, or social media profiles.</FormDescription>
						</div>
					</Form>
				</CardContent>
				<CardFooter>
					<SubmitButton>Save</SubmitButton>
				</CardFooter>
			</Card>
		</form>
	)
}
