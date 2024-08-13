import { z as zod } from "zod"

export const formSchema = zod.object({
	"first-name": zod.string(),
	"last-name": zod.string().optional(),
})
