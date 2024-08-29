"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "actions/add-client"
import { formSchema } from "components/(clients)/clients-add-form/clients-add-form-schema"
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
import type { AddClientFormFieldValues } from "types/forms"

export const AddClientForm = () => {
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
					<CardTitle>Add a staff member</CardTitle>
					<CardDescription>Used to identify your staff members to assign actions and workflows.</CardDescription>
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
											<Label htmlFor="first-name">First name</Label>
										</FormLabel>
										<FormControl>
											<Input placeholder="First name" {...field} />
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
											<Label htmlFor="last-name">Last name</Label>
										</FormLabel>
										<FormControl>
											<Input placeholder="Last name" {...field} />
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
										<FormLabel htmlFor="date" asChild>
											<Label>Date of birth</Label>
										</FormLabel>
										<FormControl>
											<HistoricDatePicker date={field.value} setDate={field.onChange} />
										</FormControl>
										<FormDescription>Your date of birth is used to calculate your age.</FormDescription>
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
											<Label htmlFor="email">Email</Label>
										</FormLabel>
										<FormControl>
											<Input placeholder="max@example.com" {...field} />
										</FormControl>
										<FormDescription>We will use this to contact you only when necessary.</FormDescription>
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
											<Label>Phone number </Label>
										</FormLabel>
										<FormControl>
											<PhoneInput {...field} />
										</FormControl>
										<FormDescription>Enter a valid phone number with country.</FormDescription>
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
