import { z as zod } from "zod"

export const formSchema = zod.object({
	name: zod.string(),
})
