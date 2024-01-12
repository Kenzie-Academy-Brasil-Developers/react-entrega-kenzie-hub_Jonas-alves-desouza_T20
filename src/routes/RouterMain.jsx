import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { HomePage, NotFoundPage, RegisterPage, UserPage } from '../pages'
import { api } from '../services'

export const RouterMain = () => {
    const localToken = localStorage.getItem('@TOKEN')
    const [token, setToken] = useState(localToken ? localToken : '')
    const [ user, setUser ] = useState(null)

    const headers = { headers: { Authorization: `Bearer ${token}` } }
    
    const navigate = useNavigate()
    
    useEffect(() => {
        const loadUser = async () => {
            if(!token) return navigate('/')
            try {
                const { data } = await api.get('profile', { ...headers  }) 
                setUser(data)              
            } catch (error) {
                console.log(error)                
            }
        }

        loadUser()
    }, [])
   
    const userLogin = async (payLoad) => {
        try {
            const { data: { token }, } = await api.post('/sessions', payLoad)
            setToken(token)
            localStorage.setItem('@TOKEN', token)
            navigate('/user')
            console.log('deu certo')
        } catch (error) {
            console.log(error)
            console.log('deu errado')            
        }
    }

    const userlogout = () => {
        setUser(null)
        localStorage.removeItem('@TOKEN')
        navigate('/')
    }


    return(
        <Routes>
            <Route path='/' element={<HomePage userLogin={userLogin}/>} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/user' element={<UserPage userlogout={userlogout} user={user} />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}