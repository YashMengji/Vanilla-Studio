import React from 'react'

function PropertiesSection() {

  function showEditPropertiesPanel(num){
    let basicPanel = document.querySelector(".div-basic-properties-panel").style
    let layoutPanel = document.querySelector(".div-layout-properties-panel").style
    let animationPanel = document.querySelector(".div-animation-properties-panel").style
    switch (num){
      case 1:
        basicPanel.visibility = "visible"
        layoutPanel.visibility = "hidden"
        animationPanel.visibility = "hidden"
        break;
      case 2: 
        basicPanel.visibility = "hidden"
        layoutPanel.visibility = "visible"
        animationPanel.visibility = "hidden"
        break;
      case 3: 
        basicPanel.visibility = "hidden"
        layoutPanel.visibility = "hidden"
        animationPanel.visibility = "visible"
        break;
    }
  }
  
  return (
    <div className="div-properties-section">
      <div className="div-basic-properties-btn" onClick={() => {showEditPropertiesPanel(1)}}>
        <span className="basic-properties-btn material-symbols-outlined">
          brush
        </span>
      </div>
      <div className="div-layout-properties-btn" onClick={() => {showEditPropertiesPanel(2)}}>
        <span className="layout-properties-btn material-symbols-outlined">
          dashboard
        </span>
      </div>
      <div className="div-animation-properties-btn" onClick={() => {showEditPropertiesPanel(3)}}>
        <span className="animation-properties-btn material-symbols-outlined">
          animation
        </span>
      </div>
    </div>
  )
}

export default PropertiesSection