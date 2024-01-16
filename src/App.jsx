import { useContext } from 'react'
import { Spinner } from 'react-loading-io'

import './style/index.scss'
import { RouterMain } from './routes/index'
import { UserContext } from './providers/UserContext'
 
export const App = () => {
  const { loading } = useContext(UserContext)
  const spinnerConfig = { left: '50%', transform: 'translateY(150%)' }

  return (
    <>
      {loading ? <Spinner style={spinnerConfig} /> : <RouterMain />}
    </>
  )
}


