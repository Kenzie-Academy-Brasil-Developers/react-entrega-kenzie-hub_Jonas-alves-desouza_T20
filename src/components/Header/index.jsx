import { Button } from '../fragments'
import Logo from '../../assets/Logo.svg'
import style from './style.module.scss'
import { UserContext } from '../../providers/UserContext'
import { useContext } from 'react'
import { NotifySucess } from '../fragments'

export const Header = () => {
    const { userLogout } = useContext(UserContext)

    return(
        <header className='containerDefault'>
            <div className={style.headerBox}>
                <img src={Logo} alt='Logo Kenzie Hub ' />
                <Button
                    className='typoButton middle center button ' 
                    onClick={userLogout} 
                    
                    >
                    Sair
                </Button>
            </div>
        </header>
    )
}