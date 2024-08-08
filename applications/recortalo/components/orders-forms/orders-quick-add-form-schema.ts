import { z as zod } from "zod"

export const formSchema = zod.object({
	category: zod.string(),
	employee: zod.string(),
	subcategory: zod.string(),
	cost: zod.coerce.number(),
	status: zod.string(),
})
