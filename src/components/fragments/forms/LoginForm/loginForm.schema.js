import { z } from 'zod'

export const loginFormSchema = z.object({
    email: z
        .string()
        .min(1, 'Este Campo e obrigatorio.')
        ,

    password: z
        .string()
        .min(1, 'Este Campo e obrigatorio.')        
        ,
})
