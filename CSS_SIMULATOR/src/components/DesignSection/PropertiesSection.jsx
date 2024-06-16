import React from 'react'

function PropertiesSection() {



  return (
    <div className="div-properties-section">
      <div className="div-basic-properties" onClick={() => {}}>
        <span className="basic-properties-btn material-symbols-outlined">
          brush
        </span>
      </div>
      <div className="div-layout-properties">
        <span className="layout-properties-btn material-symbols-outlined">
          dashboard
        </span>
      </div>
      <div className="div-animation-properties">
        <span className="animation-properties-btn material-symbols-outlined">
          animation
        </span>
      </div>
    </div>
  )
}

export default PropertiesSection