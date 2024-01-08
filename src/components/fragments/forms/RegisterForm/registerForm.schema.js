import { z } from 'zod'

export const registerFormSchema = z.object({
    name: z
        .string()
        .min(1, 'Este campo é obrigatório.')
    ,

    email: z
        .string()
        .email('Forneca um E-Mail Valido.')
        .min(1, 'Este campo é obrigatório.')
    ,

    password: z
        .string()
        .min(8, 'Insira pelo menos 8 caracteres.')
        .max(18, 'Insira no máximo 18 caracteres.')
        .regex(/[a-z]+/, 'Deve conter pelo menos uma letra minúscula.')
        .regex(/[A-Z]+/, 'Deve conter pelo menos uma letra maiúscula.')
        .regex(/[0-9]+/, 'Deve conter pelo menos um número.')
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]+/, 'Deve conter pelo menos um caractere especial.')
    ,

    confirmPassword: z
        .string()
        .min(1, 'Corfirmar a senha é obrigatorio.')
        .max(18, 'Digite no maximo 18 caracters.')
        .regex(/[a-z]+/, 'Deve conter pelo menos uma letra minúscula.')
        .regex(/[A-Z]+/, 'Deve conter pelo menos uma letra maiúscula.')
        .regex(/[0-9]+/, 'Deve conter pelo menos um número.')
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]+/, 'Deve conter pelo menos um caractere especial.')
    ,
    bio: z
        .string()
        .min(1, 'Este campo é obrigatório.') 

    ,

    contact: z
        .string()
        .min(1, 'Este campo é obrigatório.') 
    ,
    course_module: z
        .string()
        .min(1, 'Este campo é obrigatório.')
    ,
})
.refine(({ password, confirmPassword }) => password === confirmPassword, { 
    message: 'As senha nao correspondem.',
    path: ['confirmPassword'],
})
.refine(({name, password}) => !password.includes(name), {
    message: 'A sunha senha nao pode ter seu nome.',
    path: ['password'],
})