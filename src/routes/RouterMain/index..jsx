import { Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage, RegisterPage, UserPage } from '../../pages'
import { PrivateRoutes, PublicRoutes } from '../index'
import { TechnologyProvider } from '../../providers'

export const RouterMain = () => {

    return(
        <Routes>
            <Route element={<PublicRoutes />}> 
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes />} >
                <Route path='/user' element={ 
                    <TechnologyProvider>
                        <UserPage />
                    </TechnologyProvider> } />
            </Route>
        
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}