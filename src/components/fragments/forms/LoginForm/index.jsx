import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Button, Input, InputPassword } from '../../index'
import { loginFormSchema } from './loginForm.schema'
import { api } from '../../../../services/index'

import styles from './style.module.scss'

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

export const LoginForm = ({ setUser }) => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(loginFormSchema)
    })
    
    const navigate = useNavigate()
    
    const userLogin = async (payLoad) => {
        try {
            const { data } = await api.post('/sessions', payLoad)
            setUser(data.user)
            notifySucess()
            navigate('/user')
        } catch (error) {
            console.log(error)
            notifyError()            
        }
    }

    
    const onSubmit = (payLood) => {
        userLogin(payLood)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={`${styles.inputBox}`}>
                <Input
                    className='typoInput login'
                    label='E-Mail:'
                    type='email' 
                    error={errors.email}
                    {...register('email')} 

                />
                <InputPassword
                    className='typoInput login'
                    label='Senha:'
                    error={errors.password}
                    {...register('password')}
                />
                
                <Button className='button bigger pink typoButton center' type='submit'>Entrar</Button>
            </div>

            <div className={`${styles.buttonBox}`}>
                <p className='paragraph bold' >Não tem uma conta ainda?</p>
                <Link className='button bigger grey typoButton center' to='/register'>Cadastre-se</Link>
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