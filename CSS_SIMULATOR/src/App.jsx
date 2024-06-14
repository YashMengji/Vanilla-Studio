import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar, PrimaryPanel, SimWindow, SecondaryPanel} from './components/DesignSection/Design.js'

function App() {
  

  return (
    <>
      <Navbar />
      <div className="div-main">
        <PrimaryPanel />
        <SimWindow />
        <SecondaryPanel />
      </div>
    </> 
  )
}

export default App
