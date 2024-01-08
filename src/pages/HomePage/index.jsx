import { LoginForm } from '../../components/fragments/forms/LoginForm'
import logo from '../../assets/Logo.svg'
import styles from './style.module.scss'

export const HomePage = ({setUser}) => {
    return(
        <div className='container'>
            <img className={`${styles.logo}`} src={logo} alt="Logo Kenzie Hub" />
            <div className={`${styles.loginBox}`}>
                <h2 className='title center' >Login</h2>
                <div>
                    <LoginForm setUser={setUser} />
                </div>
            </div>
        </div>
    )
}