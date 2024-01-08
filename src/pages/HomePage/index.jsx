import { Link } from 'react-router-dom'
import { LoginForm } from '../../components/fragments/forms/LoginForm'
export const HomePage = ({setUser}) => {
    return(
        <div>
            <h1>Logo fica aqui...</h1>
            <div>
                <h2>Login</h2>
                <div>
                    <LoginForm setUser={setUser} />
                </div>
            </div>
        </div>
    )
}