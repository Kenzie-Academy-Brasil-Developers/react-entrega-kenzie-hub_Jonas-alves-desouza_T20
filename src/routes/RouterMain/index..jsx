import { Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage, ProfilePage, RegisterPage, UserPage } from '../../pages'
import { PrivateRoutes } from '../PrivateRoute'

export const RouterMain = () => {

    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<PrivateRoutes />} >
                <Route path='/user' element={<UserPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Route>
            
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}