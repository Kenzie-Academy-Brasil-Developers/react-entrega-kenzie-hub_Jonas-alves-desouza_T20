import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'

import { Button, Input, InputPassword } from '../../index'
import { registerFormSchema } from './registerForm.schema'
import { api } from '../../../../services/index'
import { SelectModule } from './SelectModule'

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(registerFormSchema)
    })
    
    
    const userRegister = async (payLoad)=>{
        try {
            const { data } = await api.post('/users', payLoad )
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    
    const navigate = useNavigate()

    const onSubmit = (payLoad) => {
        userRegister(payLoad)
    }

      return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input

                label='Nome:'
                type='text' 
                error={errors.name}
                placeholder='Digite aqui seu nome...'
                {...register('name')} 

            />
            <Input

                label='E-Mail:'
                type='email' 
                error={errors.email}
                placeholder='Digite aqui seu email...'
                {...register('email')} 

            />

            <InputPassword

                label='Senha' 
                error={errors.password}
                placeholder='Digite aqui sua senha...' 
                {...register('password')} 
            />

            <InputPassword

                label='Confirme sua senha:'
                error={errors.confirmPassword}
                placeholder='Digite movamente sua senha...'
                {...register('confirmPassword')}

            />
            <Input

                label='bio:'
                type='text' 
                error={errors.bio}
                placeholder='Fale sobre voce...'
                {...register('bio')} 

            />
            <Input

                label='contato:'
                type='text' 
                error={errors.contact}
                placeholder='Digite aqui seu contato...'
                {...register('contact')} 

            />
            <SelectModule
                error={errors.selectModule}
                register={register}
            />    

            <div>
                <Link to='/'>voltar</Link>
            </div>  
            <Button type='submit'>Cadastrar</Button>
        </form>
    )
}