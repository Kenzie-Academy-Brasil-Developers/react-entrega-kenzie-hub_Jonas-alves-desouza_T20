import { Button } from '../fragments'
import Logo from '../../assets/Logo.svg'
import style from './style.module.scss'
import { UserContext } from '../../providers/UserContext'
import { useContext } from 'react'

export const Header = () => {
    const { userLogout } = useContext(UserContext)

    return(
        <header className='containerDefault'>
            <div className={style.headerBox}>
                <img src={Logo} alt='Logo Kenzie Hub ' />
                <Button
                    className='typoButton smallerLetter center button smaller ' 
                    onClick={userLogout} >
                    Sair
                </Button>
            </div>
        </header>
    )
}