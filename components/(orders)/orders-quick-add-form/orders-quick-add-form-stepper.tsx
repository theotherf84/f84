"use client"

import type { formSchema } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-schema"
import { Minus, Plus } from "lucide-react"
import type { Control } from "react-hook-form"
import { Button } from "shadcn/button"
import { FormControl, FormField, FormItem } from "shadcn/form"
import { Input } from "shadcn/input"
import type { z as zod } from "zod"

export const OrdersQuickAddFormStepper = ({ control }: { control: Control<zod.infer<typeof formSchema>> }) => {
	const handleOnDecreaseCost = (field) => field.onChange(field.value - 500)

	const handleOnIncreaseCost = (field) => field.onChange(field.value + 500)

	return (
		<FormField
			control={control}
			name="cost"
			defaultValue={6000}
			render={({ field }) => (
				<>
					<div className="flex items-center justify-center">
						<Button
							variant="outline"
							size="icon"
							className="h-8 w-8 shrink-0 rounded-full"
							onClick={(event) => {
								event.preventDefault()

								handleOnDecreaseCost(field)
							}}
							disabled={field.value <= 500}
						>
							<Minus className="h-4 w-4" />
							<span className="sr-only">Decrease</span>
						</Button>
						<div className="flex flex-1 flex-col gap-2 my-4 text-center">
							<div className="text-6xl font-bold tracking-tighter">{field.value}</div>
							<div className="text-xs uppercase text-muted-foreground">Costo del servicio</div>
						</div>
						<Button
							variant="outline"
							size="icon"
							className="h-8 w-8 shrink-0 rounded-full"
							onClick={(event) => {
								event.preventDefault()

								handleOnIncreaseCost(field)
							}}
							disabled={field.value >= 10000}
						>
							<Plus className="h-4 w-4" />
							<span className="sr-only">Increase</span>
						</Button>
					</div>
					<FormItem hidden>
						<FormControl>
							<Input type="number" {...field} onChange={(event) => field.onChange(+event.target.value)} />
						</FormControl>
					</FormItem>
				</>
			)}
		/>
	)
}
