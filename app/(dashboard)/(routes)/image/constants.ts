import * as z from "zod"

export const formSchema = z.object({
    prompt: z.string().min(1,{
        message: "Please enter your Image prompt",
    }),
    amount:z.string().min(1),
    resolution:z.string().min(1)
})