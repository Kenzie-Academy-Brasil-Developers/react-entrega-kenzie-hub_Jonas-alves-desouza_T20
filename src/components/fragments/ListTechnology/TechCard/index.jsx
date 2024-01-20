import { useContext, useState } from 'react'
import { BiPencil, BiTrash } from 'react-icons/bi'

import style from './style.module.scss'

import { Button } from '../../Button'
import { TechnologyContext } from '../../../../providers'
import { EditTechModal } from '../../modals/EditTechModal'

export const TechCard = ({ tech }) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const { setEditTech, techDelete } = useContext(TechnologyContext)

    return(
        <li>
            <div className={`${style.cardContainer}`}>
                <div className={`${style.techInfo}`}>
                    <h4 className='title light' >{tech.title}</h4>
                    <p className='paragraph light'>{tech.status}</p>
                </div>
                <div className={`${style.sectionEditTech}`}>
                    <Button 
                        onClick={()=> {
                            setIsOpen(true)
                            return setEditTech(tech)
                        }}
                    >
                        <BiPencil
                            size={18}
                            color='F8F9FA' 
                        />
                    </Button>
                    <Button 
                        onClick={() => techDelete(tech.id)}
                    >
                        <BiTrash
                            size={18}
                            color='F8F9FA' 
                        />
                    </Button>
                
                </div>
            </div>
            {
                isOpen ? <EditTechModal  
                    setIsOpen={setIsOpen}
                /> : null
            }
        </li>
    )
}