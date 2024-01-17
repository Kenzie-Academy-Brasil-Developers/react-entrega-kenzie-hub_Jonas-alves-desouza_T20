import { Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage, ProfilePage, RegisterPage, UserPage } from '../../pages'
import { PrivateRoutes, PublicRoutes } from '../index'

export const RouterMain = () => {

    return(
        <Routes>

            <Route element={<PublicRoutes />}> 
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes />} >
                <Route path='/user' element={<UserPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Route>
            
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}