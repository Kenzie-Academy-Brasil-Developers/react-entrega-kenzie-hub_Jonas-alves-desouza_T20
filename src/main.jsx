import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { App } from './App.jsx'
import { UserProvider } from './providers/UserContext.jsx'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>

    <ToastContainer
                position='top-center'
                autoClose={0.3 * 1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
  </React.StrictMode>,
)
