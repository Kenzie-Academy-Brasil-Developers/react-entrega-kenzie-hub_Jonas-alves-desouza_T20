import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { Button, Input, InputPassword } from '../../index'
import { registerFormSchema } from './registerForm.schema'
import { api } from '../../../../services/index'
import { SelectModule } from './SelectModule'

import style from './style.module.scss'

import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notifyError = ()=> {

   toast.error('Algo deu errado!', {
      position: "top-center",
      autoClose: 0.3 * 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}

const notifySucess = ()=> {
   toast.success('Login realizado com sucesso',{
      position: "top-center",
      autoClose: 0.3 * 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   })
}

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(registerFormSchema)
    })
    
    
    const userRegister = async (payLoad)=>{
        try {
            const { data } = await api.post('/users', payLoad )
            notifySucess()
            navigate('/')
        } catch (error) {
            console.log(error)
            notifyError()
        }
    }
    
    const navigate = useNavigate()

    const onSubmit = (payLoad) => {
        userRegister(payLoad)
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

                
                <Button className='button bigger pinkDisable typoButton center' type='submit'>Cadastrar</Button>
                 

            </div>

            <ToastContainer
                position="top-center"
                autoClose={0.3 * 1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </form>
    )
}