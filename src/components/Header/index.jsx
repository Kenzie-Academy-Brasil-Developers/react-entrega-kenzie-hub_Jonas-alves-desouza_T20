import { Button } from '../fragments'
import Logo from '../../assets/Logo.svg'
import style from './style.module.scss'

export const Header = ({userlogout}) => {
    return(
        <header className='containerDefault'>
            <div className={style.headerBox}>
                <img src={Logo} alt="Logo Kenzie Hub " />
                <Button
                    className='typoButton smallerLetter center button smaller ' 
                    onClick={userlogout} >
                    Sair
                </Button>
            </div>
        </header>
    )
}