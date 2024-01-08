import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { HomePage, NotFoundPage, RegisterPage, UserPage } from '../pages'

export const RouterMain = () => {
    const [ user, setUser ] = useState(null)
    const navigate = useNavigate()

    const userlogout = () => {
        setUser(null)
        navigate('/')
    }

    return(
        <Routes>
            <Route path='/' element={<HomePage setUser={setUser}/>} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/user' element={<UserPage userlogout={userlogout} user={user} />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}