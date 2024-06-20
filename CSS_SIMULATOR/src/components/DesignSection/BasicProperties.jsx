import React from 'react'

function BasicProperties() {
  return (
    <div className="div-basic-properties-panel">
      <div className="div-alignment-section">
        <span className="alignment-icons material-symbols-outlined">
          align_justify_flex_start
        </span>
        <span className="alignment-icons material-symbols-outlined">
          align_justify_center
        </span>
        <span className="alignment-icons material-symbols-outlined">
        align_justify_flex_end
        </span>
        <span className="alignment-icons material-symbols-outlined">
        align_flex_start
        </span>
        <span className="alignment-icons material-symbols-outlined">
        align_flex_center
        </span>
        <span className="alignment-icons material-symbols-outlined">
        align_flex_end
        </span>
      </div>
      <div className="div-break-between"></div>
      <div className="div-dimension-section">
        <div className="div-dimension-heading">
          Size
        </div>
        <div className="div-edit-dimension">
          <div className="div-xy-dim">
            <div className="div-x-dim">
              X 
              <div className="div-x-dim-input">
                <input type="number" className="x-dim-input" />
                <div className="div-px-text">px</div>
              </div>
            </div>
            <div className="div-y-dim">
              Y 
              <div className="div-y-dim-input">
                <input type="text" className="y-dim-input" />
                <div className="div-px-text">px</div>
              </div>
            </div>
          </div>
          <div className="div-wh-dim">
            <div className="div-w-dim">
              W 
              <div className="div-w-dim-input">
                <input type="text" className="w-dim-input" />
                <div className="div-px-text">px</div>
              </div>
            </div>
            <div className="div-h-dim">
              H 
              <div className="div-h-dim-input">
                <input type="text" className="h-dim-input" />
                <div className="div-px-text">px</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicProperties