"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "actions/quick-add-order"
import { formSchema } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-schema"
import { OrdersQuickAddFormStepper } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-stepper"
import { SubmitButton } from "components/submit-button"
import { getFormattedNameInitial } from "helpers/get-formatted-name-initial"
import { type SubmitHandler, useForm } from "react-hook-form"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { DatePicker } from "shadcn/date-picker"
import { Form, FormControl, FormField, FormItem, FormLabel } from "shadcn/form"
import { Label } from "shadcn/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"
import type { QuickAddOrderFormFieldValues, QuickAddOrderFormProperties } from "types/forms"
import type { Category, Employee, Subcategory } from "types/tables.types"

export const QuickAddOrderForm = ({ categories, employees, subcategories, onSubmit }: QuickAddOrderFormProperties) => {
	const defaultCategory = categories?.filter((category: { name: string }) => category?.name === "Servicios")?.[0]?.name
	const defaultSubcategory = subcategories?.filter((subcategory: { name: string }) => subcategory?.name === "Corte de caballero")?.[0]?.name

	const form = useForm<QuickAddOrderFormFieldValues>({
		defaultValues: {
			category: defaultCategory,
			date: new Date(),
			subcategory: defaultSubcategory,
			cost: 500,
			status: "Payed",
		},
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
	})

	const handleOnSubmit: SubmitHandler<QuickAddOrderFormFieldValues> = async (data) => {
		const statusCode = await action(data)

		if (statusCode === 201) onSubmit()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleOnSubmit)} className="mx-auto space-y-4 py-6">
				<div className="grid gap-3">
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel htmlFor="date" asChild>
									<Label>Date</Label>
								</FormLabel>
								<FormControl>
									<DatePicker date={field.value} setDate={field.onChange} shouldDisableFutureSelection />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-3">
					<FormField
						control={form.control}
						name="employee"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="employee" asChild>
									<Label>Employee</Label>
								</FormLabel>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger className="h-fit" aria-label="Select employee" id="employee">
											<SelectValue placeholder="Select employee" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{employees?.map(({ first_name, id, last_name }: Employee) => (
											<SelectItem key={id} value={String(id)}>
												<div className="flex flex-row gap-4 items-center justify-center">
													<Avatar>
														<AvatarFallback>
															{getFormattedNameInitial(first_name)}
															{getFormattedNameInitial(last_name)}
														</AvatarFallback>
													</Avatar>
													{first_name} {last_name}
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-3">
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="category" asChild>
									<Label>Category</Label>
								</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={defaultCategory}>
									<FormControl>
										<SelectTrigger aria-label="Select category" id="category">
											<SelectValue placeholder="Select category" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{categories?.map(({ id, name }: Category) => (
											<SelectItem key={id} value={name}>
												{name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-3">
					<FormField
						control={form.control}
						name="subcategory"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="subcategory" asChild>
									<Label>
										Subcategory <span className="text-xs">(optional)</span>
									</Label>
								</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={defaultSubcategory}>
									<FormControl>
										<SelectTrigger aria-label="Select subcategory" id="subcategory">
											<SelectValue placeholder="Select subcategory" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{subcategories?.map(({ id, name }: Subcategory) => (
											<SelectItem key={id} value={name}>
												{name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-3">
					<OrdersQuickAddFormStepper control={form.control} />
				</div>
				<div className="grid gap-3">
					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="status" asChild>
									<Label>Status</Label>
								</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={"Payed"}>
									<FormControl>
										<SelectTrigger aria-label="Select status" id="status">
											<SelectValue placeholder="Select status" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="Payed">Payed</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<SubmitButton formState={form.formState}>Save order</SubmitButton>
			</form>
		</Form>
	)
}
