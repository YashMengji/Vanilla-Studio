import React from 'react'
import './Css/PropertiesPanel.css'
import PropertiesPath from './PropertiesPath'
import PropertiesSection from './PropertiesSection'
import EditPropertiesPanel from './EditPropertiesPanel'


function PropertiesPanel() {
  return (
    <>
      <div className='div-properties-panel'>
        <PropertiesPath/>
        <PropertiesSection/>
        <EditPropertiesPanel/>
      </div>
    </>
  )
}

export default PropertiesPanel