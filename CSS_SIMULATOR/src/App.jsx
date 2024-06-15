import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar, ElementsPanel, SimWindow, PropertiesPanel} from './components/DesignSection/Design.js'

function App() {
  

  return (
    <>
      <Navbar />
      <div className="div-main">
        <ElementsPanel />
        <SimWindow />
        <PropertiesPanel />
      </div>
    </> 
  )
}

export default App
