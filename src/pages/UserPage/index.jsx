import { useContext, useState } from 'react'
import { DefaultTemplade } from '../../components/DefaultTemplade'
import style from './style.module.scss'
import { UserContext } from '../../providers/UserContext'
import { ListTechology } from '../../components/fragments'
import { RegisterTechModal } from '../../components/fragments/modals/RegisterTechModal'


export const UserPage = () => {
    const { user } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)

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
                        <ListTechology setIsOpen={setIsOpen} />
                    </div>
                </div>
                {
                    isOpen ? <RegisterTechModal setIsOpen={setIsOpen} /> : null
                }
            </DefaultTemplade>
        </>
    )
}