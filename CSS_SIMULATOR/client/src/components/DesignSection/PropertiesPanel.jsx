import React, { useState } from 'react'
import './Css/PropertiesPanel.css'
import PropertiesPath from './PropertiesPath'
import PropertiesSection from './PropertiesSection'
import EditPropertiesPanel from './EditPropertiesPanel'



function PropertiesPanel() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div onClick={() => {setIsExpanded(!isExpanded)}} 
      className={`${isExpanded ? 'div-toggle-button-expand' : 'div-toggle-button' }`}
      >
        <span className="material-symbols-outlined">
          {isExpanded ? 'arrow_forward_ios' : 'arrow_back_ios' }
        </span>
      </div>
      <div className={`${isExpanded ? 'div-properties-panel-expand' : 'div-properties-panel' }`}>
        <PropertiesSection/>
        <PropertiesPath/>
        <EditPropertiesPanel/>
      </div>
    </>
  )
}

export default PropertiesPanel