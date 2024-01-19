import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'

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
        <div ref={closeModalOutClick}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h5 className='title'>Editar Tecnologia</h5>
                    <Button  
                        className='typoButton smallerLetter center button smaller'
                        onClick={()=> 
                            setIsOpen(false)}
                        >
                            Fechar
                    </Button>
                </div>
                <div>
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
                <Button 
                    className='button bigger pink typoButton center' 
                    type='submit' 
                >
                    { loading ? 'Editando Tecnologia...' : 'Editar Tecnologia' }
                </Button>
            </form>
        </div>
    )
}