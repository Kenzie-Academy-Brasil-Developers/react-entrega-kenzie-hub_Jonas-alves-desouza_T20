import { createContext, useContext, useState } from 'react' 

import { NotifyError, NotifySucess } from '../components/fragments/index'
import { api } from '../services'
import { UserContext } from './UserContext'

export const TechnologyContext = createContext([])

export const TechnologyProvider = ({ children }) => {

    const token = localStorage.getItem('@TOKEN')
    const headers = { headers: { Authorization: `Bearer ${token}` } }

    const { techList, setTechList } = useContext(UserContext)
    const [ editTech, setEditTech ] = useState(null)


  
    const techRegister = async (payLoad, setLoading)=>{
        try {
            setLoading(true)
            const { data } = await api.post('/users/techs', payLoad, { ...headers })
            
            setTechList( [ ...techList, data ] )
            NotifySucess('Tecnologia cadastrada com sucesso!')
        } catch (error) {
            NotifyError('Infelizmente algo deu errado! ')
        }finally{
            setLoading(false)
        }
    }

    const techUpdate = async (payload, setLoading) => {
        try {
            setLoading(true)
            const token = localStorage.getItem('@TOKEN')

            const { data } = await api.put(`/users/techs/${editTech.id}`,
            payload, { ...headers })

            const newTechList = techList.map(tech =>{
                if(tech.id === editTech.id){
                    return data
                }else{
                    return tech
                }
            })
            setTechList(newTechList)
            NotifySucess('Tecnologia editada com sucesso!')
        } catch (error) {
            NotifyError('Infelizmente algo deu errado! ')
        }finally{
            setLoading(false)
        }
    }

    const techDelete = async (techId) => {
        try {
            await api.delete(`/users/techs/${techId}`, { ...headers })
            const newTechList = techList.filter((tech) => tech.id !== techId)
            setTechList(newTechList)
            NotifySucess('Tecnologia excluida com sucesso!')
        } catch (error) {
            NotifyError('Infelizmente algo deu errado! ')            
        }
    }

    return(
        <TechnologyContext.Provider value={{ 
                techRegister, 
                techList, 
                editTech, 
                setEditTech,
                techUpdate,
                techDelete,
             }} >

            { children }
        </TechnologyContext.Provider>
    )
}