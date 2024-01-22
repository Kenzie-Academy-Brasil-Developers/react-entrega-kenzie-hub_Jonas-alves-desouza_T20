import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { NotifyError, NotifySucess } from '../components/fragments/index'
import { api } from '../services'

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [loading, setLoading] = useState(false)

    const localToken = localStorage.getItem('@TOKEN')
    const [token, setToken] = useState(localToken ? localToken : '')
    const [user, setUser] = useState(null)
    const [ techList, setTechList ] = useState([])
    
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    
    const navigate = useNavigate()
    const { state } = useLocation()
    const pathName = window.location.pathname
    
    useEffect(() => {
        const loadUser = async () => {
            if(!token) return 
            try {
                setLoading(true)
                const { data } = await api.get('/profile', { ...headers }) 
                setUser(data)
                setTechList(data.techs)
                navigate(pathName)              
            } catch (error) {
                console.log(error)                
            }finally{
                setLoading(false)
            }
        }

        loadUser()
    }, [])
   
    const userLogin = async (payLoad, setLoading, reset) => {
        try {
            setLoading(true)

            const { data } = await api.post('/sessions', payLoad)
            localStorage.setItem('@TOKEN', data.token)
            setToken(data.token)
            setUser(data.user)
            setTechList(data.user.techs)
            
            reset()
            NotifySucess('Login Realizado com sucesso!')
            navigate(state?.lastRoute ? state.lastRoute : '/user')
        } catch (error) {
            console.log(error)
            NotifyError('Usuario ou senha invalido!')           
        }finally{
            setLoading(false)
        }
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem('@TOKEN')
        navigate('/')
    }

    const userRegister = async (payLoad, setLoading, reset)=>{
        try {
            setLoading(true)
            const { data } = await api.post('/users', payLoad )

            reset()
            navigate('/')
            NotifySucess('Usuario cadastrado com sucesso!')
        } catch (error) {
            console.log(error)
            NotifyError('Infelizmente algo deu errado! ')
        }finally{
            setLoading(false)
        }
    }
    

    return(
        <UserContext.Provider value={{ 
            userLogin, 
            userLogout, 
            userRegister, 
            user, 
            loading,
            techList, 
            setTechList 
            }}>
            {children}
        </UserContext.Provider>
    )
}