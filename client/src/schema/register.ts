import * as z from "zod"

export const registerSchema = z.object({
    name : z.string().min(3,{message:"Name must contain at least 3 character"}).max(8).trim(),
    email : z.string().email().nonempty(),
    password : z.string().min(6 ,{message:"Password must contain at least 6 character"})
})