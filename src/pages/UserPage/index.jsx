import { useContext, useState } from 'react'
import { DefaultTemplade } from '../../components/DefaultTemplade'
import style from './style.module.scss'
import { UserContext } from '../../providers/UserContext'


export const UserPage = () => {
    const { user } = useContext(UserContext)

    return(
        <>
            <DefaultTemplade>
                <div>
                    <div className={`${style.userSection}`}>
                        <div className='containerDefault'>
                            <h2 className='title'>Ola {user?.name}</h2>
                            <p className='paragraph light'>{user?.course_module}</p>
                        </div>
                    </div>
                    <div className='containerDefault'>
                        <h3 className='title'>Que pena! Estamos em desenvolvimento :(</h3>
                        <p className='paragraph'>Nossa aplicacao esta em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </div>
            </DefaultTemplade>
        </>
    )
}