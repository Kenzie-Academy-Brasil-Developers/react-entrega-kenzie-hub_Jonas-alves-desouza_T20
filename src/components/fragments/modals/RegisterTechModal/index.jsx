import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'

import { Button } from '../../Button'
import { SelectLevelTech } from './SelectLevelTech'
import { TechnologyContext } from '../../../../providers'
import { Input } from '../../index'
import { registerTechSchema } from '../../../../schema'

export const RegisterTechModal = ({setIsOpen}) => {
    const { techRegister } = useContext(TechnologyContext)
    const [ loading, setLoading ] = useState(false)

    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(registerTechSchema)
    })
    const onSubmit = (payLoad) => {
        techRegister(payLoad, setLoading, reset)
        setIsOpen(false)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h5 className='title'>Cadastrar Tecnologia</h5>
                    <Button  className='typoButton smallerLetter center button smaller'
                     onClick={()=> setIsOpen(false)} >
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
                    errors={errors}
                    {...register('status')}
                />
                </div>

                <Button className='button bigger pink typoButton center' type='submit' >{ loading ? 'Cadastrando...' : 'Cadastrar Tecnologia' }</Button>
            </form>
        </div>
    )
}