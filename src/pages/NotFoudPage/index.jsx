import { Link } from 'react-router-dom'
import style from './style.module.scss'
import Logo from '../../assets/Logo.svg'

export const NotFoundPage = () => {
    return(
        <>
            <header className='containerDefault'>
                <div className={style.headerBox}>
                    <img src={Logo} alt="Logo Kenzie Hub " />
                    <Link
                        className='typoButton smallerLetter center button smaller ' 
                        to='/'>
                        Voltar
                    </Link>
                </div>
            </header>
            <div className='containerDefault'>
                <h1 className='title'>Error 404</h1>
                <p className='paragraph'>Nao foi possivel encontrar a pagina</p>
            </div>
        </>
    )
}