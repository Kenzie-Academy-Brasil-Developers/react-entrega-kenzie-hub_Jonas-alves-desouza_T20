import { RegisterForm } from '../../components/fragments'

export const RegisterPage = () => {
    return(
        <div>
            <div>
                <h1>Crie sua conta</h1>
                <p>Rapido e gratis, vamos nessa!</p>
            </div>
            <div>
                <RegisterForm />
            </div>
        </div>
    )
}