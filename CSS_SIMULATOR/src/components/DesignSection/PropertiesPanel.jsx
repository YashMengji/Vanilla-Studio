import React from 'react'
import './Css/PropertiesPanel.css'
import PropertiesPath from './PropertiesPath'
import PropertiesSection from './PropertiesSection'


function PropertiesPanel() {
  return (
    <>
      <div className='div-properties-panel'>
        <PropertiesPath/>
        <PropertiesSection/>
      </div>
    </>
  )
}

export default PropertiesPanel