import {Outlet} from 'react-router-dom'
import './App.css'
import { ResizeProvider } from './components/DesignSection/ResizeContext'

function App() {
  

  return (
    <>
      <ResizeProvider>
        <Outlet/>
      </ResizeProvider>
      
    </> 
  )
}

export default App
