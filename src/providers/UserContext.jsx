import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { NotifyError, NotifySucess } from '../components/fragments/index'
import { api } from '../services'

export const UserContext = createContext([])

export const UserProvider = ({children}) => {
    const [loading, setLoading] = useState(false)

    const localToken = localStorage.getItem('@TOKEN')
    const [token, setToken] = useState(localToken ? localToken : '')
    const [user, setUser] = useState(null)

    const headers = { headers: { Authorization: `Bearer ${token}` } }
    
    const navigate = useNavigate()
    const pathName = window.location.pathname
    
    useEffect(() => {
        const loadUser = async () => {
            if(!token) return navigate('/')
            try {
                setLoading(true)

                const { data } = await api.get('/profile', { ...headers }) 
                setUser(data)
                navigate(pathName)              
            } catch (error) {
                console.log(error)                
            }finally{
                setLoading(false)
            }
        }

        loadUser()
    }, [])
   
    const userLogin = async (payLoad, setLoading) => {
        try {
            setLoading(true)
            const { data: { token }, } = await api.post('/sessions', payLoad)
            NotifySucess()
            setToken(token)
            localStorage.setItem('@TOKEN', token)
            navigate('/user')
        } catch (error) {
            console.log(error)
            NotifyError()           
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
            NotifySucess()
        } catch (error) {
            console.log(error)
            NotifyError()
        }finally{
            setLoading(false)
        }
    }
    

    return(
        <UserContext.Provider value={{ userLogin, userLogout, userRegister, user, loading }}>
            {children}
        </UserContext.Provider>
    )
}