import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'

import style from './style.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

import { Button } from '../../Button'
import { Input } from '../../index'
import { SelectLevelTech } from './SelectLevelTech'
import { TechnologyContext } from '../../../../providers'
import { registerTechSchema } from '../../../../schema'
import { useKeydown, useOutclick } from '../../../../hooks'

export const EditTechModal = ({setIsOpen}) => {
    const { editTech, techUpdate } = useContext(TechnologyContext)
    const [ loading, setLoading ] = useState(false)
    
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(registerTechSchema),
        values: {
            title : editTech.title,
            status: editTech.status,
        }
    })

    const closeModalOutClick = useOutclick(()=> {
        setIsOpen(false)      
     })
  
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsOpen(false)
     })
    
  

    const onSubmit = (payLoad) => {
       techUpdate(payLoad, setLoading)  
       setIsOpen(false)
    }
    return(
        <div
            role='dialog' 
            className={`${style.modalOverlay}`}
        >
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className={`${style.modalBox}`}
                ref={closeModalOutClick}
                >
                <div className={`${style.topModal}`}>
                    <h5 className='title'>Editar Tecnologia</h5>
                    <Button  
                        onClick={()=> 
                            setIsOpen(false)}
                        >
                            <AiOutlineClose size={16} color='868E96' />
                    </Button>
                </div>
                <div className={`${style.middleModal}`}>
                    <div className={`${style.inputBox}`}>
                        <Input
                            className='typoInput register'
                            label='Nome:'
                            type='text' 
                            error={errors.title}
                            placeholder='Digite a tecnologia...'
                            {...register('title')} 
                            />
                        <SelectLevelTech 
                            label='Selecione o Nivel:'
                            errors={errors.status}
                            {...register('status')}
                        />
                        </div>

                        <div>
                            <Button 
                                className={`
                                    button
                                    bigger
                                    pink 
                                    typoButton 
                                    center
                                    ${style.buttonBox}
                                    `} 
                                type='submit' 
                            >
                                { loading ? 'Editando Tecnologia...' : 'Editar Tecnologia' }
                            </Button>
                        </div>
                    </div>
            </form>
        </div>
    )
}