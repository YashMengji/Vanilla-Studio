import React from 'react'

function AnimationProperties() {
  return (
    <div className="div-animation-properties-panel">
      <div className="div-animation-prop-heading">
        Animations and Effects
      </div>
      <div className="div-animation-sections">
        <div className="animation-section div-animation-entrance" onClick={() => {}}>
          Entrance
        </div>
        <div className="animation-section div-animation-hover">
          Hover
        </div>
        <div className="animation-section div-animation-click">
          Click
        </div>
        <div className="animation-section div-animation-scroll">
          Scroll
        </div>
        <div className="animation-section div-animation-loop">
          Loop
        </div>
      </div>
    </div>
  )
}

export default AnimationProperties