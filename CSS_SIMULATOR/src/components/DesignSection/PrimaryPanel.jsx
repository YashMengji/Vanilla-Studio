import React from 'react'
import './Css/primarypanel.css'
import ElementsPanel from './ElementsPanel'
import SidePanel from './SidePanel'

function PrimaryPanel() {
  return (
    <>
      <div className='div-primary-panel'>
        <SidePanel />
        <ElementsPanel/>
      </div>
    </>
  )
}

export default PrimaryPanel