import { Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage, RegisterPage, UserPage } from '../pages'

export const RouterMain = () => {

    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}