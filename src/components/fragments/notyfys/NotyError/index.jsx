import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const NotifyError = (message)=> {

    toast.error(message, {
       position: 'top-center',
       autoClose: 0.3 * 1000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: 'light',
       });
 }