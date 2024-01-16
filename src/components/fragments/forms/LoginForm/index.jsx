import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

import { Button, Input, InputPassword } from '../../index'
import { loginFormSchema } from '../../../../schema/index'

import styles from './style.module.scss'

import React, { useContext, useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../../../../providers/UserContext'



export const LoginForm = () => {
    const [loading, setLoading] = useState(false)

    const { userLogin } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = (payLood) => {
        userLogin(payLood, setLoading)
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
                
                <Button className='button bigger pink typoButton center' type='submit'>{loading ? 'Loading...' : 'Login'}</Button>
            </div>

            <div className={`${styles.buttonBox}`}>
                <p className='paragraph bold' >Não tem uma conta ainda?</p>
                <Link 
                className='button bigger grey typoButton center' 
                to='/register'>
                    Cadastre-se
                </Link>
            </div>
                       
            <ToastContainer
                position='top-center'
                autoClose={0.3 * 1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </form>
    )
}