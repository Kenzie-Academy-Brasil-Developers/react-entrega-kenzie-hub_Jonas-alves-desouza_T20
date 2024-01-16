import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

/* Navigate -> Um componente para redirecionar ao ser renderizado */
/* Outlet -> Semenhante ao prop children, existe para rendeziar uma rota filha */


export const PrivateRoutes = () =>{
    const { user } = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to='/' />
}