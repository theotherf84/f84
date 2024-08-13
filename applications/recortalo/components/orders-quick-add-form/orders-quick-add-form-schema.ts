import { z as zod } from "zod"

export const formSchema = zod.object({
	category: zod.string(),
	date: zod.date(),
	employee: zod.coerce.number(),
	subcategory: zod.string(),
	cost: zod.coerce.number(),
	status: zod.string(),
})
