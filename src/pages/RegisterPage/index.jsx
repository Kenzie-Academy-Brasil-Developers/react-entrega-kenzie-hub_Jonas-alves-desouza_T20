import { Link } from 'react-router-dom'

import { RegisterForm } from '../../components/fragments'

import  Logo  from '../../assets/Logo.svg'
import style from './style.module.scss'


export const RegisterPage = () => {
    return(
        <div className='container'>
            <div>
                <div className={`${style.registerTopBox}`}>
                    <img className='logo' src={ Logo } alt="Logo Kenzie Hub" />
                    <Link className='button smaller typoButton smallerLetter center' to='/'>Voltar</Link>
                </div>
                <div className={`${style.formRegisterbox} container`}>
                    <div>
                        <h1 className='title'>Crie sua conta</h1>
                        <p className='paragraph light'>Rapido e gratis, vamos nessa!</p>
                    </div>
                    <div>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}