import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input, InputPassword } from '../../index'
import { loginFormSchema } from './loginForm.schema'
import { api } from '../../../../services/index'

export const LoginForm = ({ setUser }) => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(loginFormSchema)
    })
    
    const navigate = useNavigate()
    
    const userLogin = async (payLoad) => {
        try {
            const { data } = await api.post('/sessions', payLoad)
            setUser(data.user)
            navigate('/user')
        } catch (error) {
            console.log(error)            
        }
    }

    
    const onSubmit = (payLood) => {
        userLogin(payLood)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input

                    label='E-Mail:'
                    type='email' 
                    error={errors.email}
                    {...register('email')} 

                />
                <InputPassword

                    label='Senha:'
                    error={errors.password}
                    {...register('password')}
                />
                
                <Button type='submit'>Entrar</Button>
            </div>

            <div>
                <p>Ainda nao possui conta?</p>
                <Link to='/register'>Cadastre-se</Link>
            </div>
        </form>
    )
}