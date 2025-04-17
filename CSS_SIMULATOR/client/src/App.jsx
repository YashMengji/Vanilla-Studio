import {Outlet} from 'react-router-dom'
import './App.css'
import { ResizeProvider } from './components/DesignSection/ResizeContext'
import { ToastContainer } from 'react-toastify';
import UserContext from './contexts/UserContext';

function App() {
  

  return (
    <>
      <UserContext>
        <ResizeProvider>
          <ToastContainer />
          <Outlet/>
        </ResizeProvider>
      </UserContext>
    </>
  )
}

export default App
