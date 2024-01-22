import { useContext } from 'react'
import { BiPlus } from 'react-icons/bi'

import style from './style.module.scss' 

import { UserContext } from '../../../providers'
import { Button } from '../Button'
import { TechCard } from './TechCard'

export const ListTechology = ({ setIsOpen }) => {
    const { user, techList } = useContext(UserContext)

    return(
        <div>
            <div className={`${style.middleSection}`}>
                <h3 className='title'>Tecnologias</h3>
                <Button 
                    onClick={ () => setIsOpen(true)} 
                    className='typoButton smaller center button'
                >
                    <BiPlus  
                        size={21}
                        color='F8F9FA' 
                    />
                </Button>
            </div> 
            <div 
                className={`${style.buttonSection}`}>
                <ul className='containerDefault' >
                    {
                        techList.map(tech => (
                            <TechCard 
                            key={tech.id} 
                            tech={tech}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}