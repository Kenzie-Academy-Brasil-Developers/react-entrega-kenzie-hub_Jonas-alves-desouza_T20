import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input, InputPassword, NotifySucess, NotifyError } from '../../index'
import { registerFormSchema } from '../../../../schema/index'
import { SelectModule } from './SelectModule'

import style from './style.module.scss'

import React, { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../../../../providers/UserContext'



export const RegisterForm = () => {
    const { userRegister } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(registerFormSchema)
    })
    
    const onSubmit = (payLoad) => {
        userRegister(payLoad, setLoading, reset)
    }

      return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${style.inputBox}`}>
                <Input
                    className='typoInput register'
                    label='Nome:'
                    type='text' 
                    error={errors.name}
                    placeholder='Digite aqui seu nome...'
                    {...register('name')} 

                />
                <Input
                    className='typoInput register'
                    label='E-Mail:'
                    type='email' 
                    error={errors.email}
                    placeholder='Digite aqui seu email...'
                    {...register('email')} 

                />

                <InputPassword
                    className='typoInput register'
                    label='Senha' 
                    error={errors.password}
                    placeholder='Digite aqui sua senha...' 
                    {...register('password')} 
                />

                <InputPassword
                    className='typoInput register'
                    label='Confirme sua senha:'
                    error={errors.confirmPassword}
                    placeholder='Digite movamente sua senha...'
                    {...register('confirmPassword')}

                />
                <Input
                    className='typoInput register'
                    label='bio:'
                    type='text' 
                    error={errors.bio}
                    placeholder='Fale sobre voce...'
                    {...register('bio')} 

                />
                <Input
                    className='typoInput register'
                    label='contato:'
                    type='text' 
                    error={errors.contact}
                    placeholder='Digite aqui seu contato...'
                    {...register('contact')} 

                />
                <SelectModule
                    label='Selecione modulo:'
                    error={errors.selectModule}
                    register={register}
                />    
                
                <Button className='button bigger pinkDisable typoButton center' type='submit'>{loading ? 'Cadastrando' : 'Cadastre-se'}</Button>
                 
            </div>

            {userRegister ? NotifySucess : NotifyError}

        </form>
    )
}