import {Outlet} from 'react-router-dom'
import './App.css'
import { ResizeProvider } from './components/DesignSection/ResizeContext'
import { ToastContainer } from 'react-toastify';


function App() {
  

  return (
    <>

        <ResizeProvider>
          <ToastContainer />
          <Outlet/>
        </ResizeProvider>

    </>
  )
}

export default App
