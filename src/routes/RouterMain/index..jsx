import { Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage, RegisterPage, UserPage } from '../../pages'
import { PrivateRoutes } from '../PrivateRoute'

export const RouterMain = () => {

    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<PrivateRoutes />} >
                <Route path='/user' element={<UserPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}