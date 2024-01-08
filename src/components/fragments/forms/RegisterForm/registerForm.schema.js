import { z } from 'zod'

export const registerFormSchema = z.object({
    name: z
        .string()
        .min(1, 'Este Campo e obrigatorio.')
    ,

    email: z
        .string()
        .email('Forneca um E-Mail Valido.')
        .min(1, 'Este Campo e obrigatorio.')
    ,

    password: z
        .string()
        .min(8, 'Digite no minimo 8 caracters.')
        .max(18, 'Digite no maximo 18 caracters.')
        .regex(/[a-z]+/, 'E necessario conter pelo menos uma letra minuscula.')
        .regex(/[A-Z]+/, 'E necessario conter pelo menos uma letra maiuscula.')
        .regex(/[0-9]+/, 'E necessario conter pelo menos um numero.')
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]+/, 'E nescessario conter pelo menos um caracter especial.')
    ,

    confirmPassword: z
        .string()
        .min(1, 'Corfirmar a senha e obrigatorio.')
        .max(18, 'Digite no maximo 18 caracters.')
        .regex(/[a-z]+/, 'E necessario conter pelo menos uma letra minuscula.')
        .regex(/[A-Z]+/, 'E necessario conter pelo menos uma letra maiuscula.')
        .regex(/[0-9]+/, 'E necessario conter pelo menos um numero.')
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]+/, 'E nescessario conter pelo menos um caracter especial.')
    ,
    bio: z
        .string()
        .min(1, 'Este Campo e obrigatorio.') 

    ,

    contact: z
        .string()
        .min(1, 'Este Campo e obrigatorio.') 
    ,
    course_module: z
        .string()
        .min(1, 'Este Campo e obrigatorio.')
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