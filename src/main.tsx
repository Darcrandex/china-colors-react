import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <ToastContainer />
  </>
)
