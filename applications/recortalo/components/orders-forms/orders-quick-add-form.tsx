"use client"

import { action } from "actions/quick-add-order"
import { SubmitButton } from "components/submit-button"
import { Label } from "shadcn/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"
import { OrdersQuickAddFormStepper } from "components/orders-forms/orders-quick-add-form-stepper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z as zod } from "zod"
import { formSchema } from "components/orders-forms/orders-quick-add-form-schema"
import { Form, FormControl, FormField, FormItem, FormLabel } from "shadcn/form"
import { Category, Subcategory } from "types/tables.types"

export const QuickAddOrderForm = ({ categories, subcategories, onFormSubmit }: { categories: any; subcategories: any; onFormSubmit: any }) => {
	const defaultCategory = categories?.filter((category: { name: string }) => category?.name === "Servicios")?.[0]?.name
	const defaultSubcategory = subcategories?.filter((subcategory: { name: string }) => subcategory?.name === "Corte de caballero")?.[0]?.name

	const form = useForm<zod.infer<typeof formSchema>>({
		defaultValues: {
			category: defaultCategory,
			subcategory: defaultSubcategory,
			cost: 500,
			status: "Payed",
		},
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
	})

	const handleOnSubmit = async (values: zod.infer<typeof formSchema>) => {
		const statusCode = await action(values)

		if (statusCode === 201) onFormSubmit()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleOnSubmit)} className="mx-auto grid gap-4 py-6">
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
										{categories?.map((category: Category) => (
											<SelectItem key={category?.id} value={category?.name}>
												{category?.name}
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
										{subcategories?.map((subcategory: Subcategory) => (
											<SelectItem key={subcategory?.id} value={subcategory?.name}>
												{subcategory?.name}
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
