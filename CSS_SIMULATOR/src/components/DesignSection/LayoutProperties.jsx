import React, {useState} from 'react'
import './Css/LayoutProperties.css'

function LayoutProperties() {

  const [iscolumnDrop, setIsColumnDrop] = useState(false);
  const [isrowDrop, setIsrowDrop] = useState(false);

  return (
    <div className="div-layout-properties-panel">
      <div className="div-layout-heading">
        Layout
      </div>
      <div className="div-choose-layout">
        <p>Choose Layout</p>
        <div className="div-layout-options-grid">
          <div className="div-layout-option">1</div>
          <div className="div-layout-option">2</div>
          <div className="div-layout-option">3</div>
          <div className="div-layout-option">4</div>
          <div className="div-layout-option">5</div>
          <div className="div-layout-option">6</div>
          <div className="div-layout-option">7</div>
          <div className="div-layout-option">8</div>
          <div className="div-layout-option">9</div>
        </div>
      </div>
      <div className="div-layout-details">
        <p>Layout details</p>
        <div className="div-split-section">
          <span className='material-symbols-outlined split'>
            content_cut
          </span>
          <span className='material-symbols-outlined split split-vertically'>
            content_cut
          </span>
        </div>
        <div className="div-column-details" onClick={() => {setIsColumnDrop(!iscolumnDrop)}}>
          <p>Columns (4)</p>
          <div className="div-column-functions">
            <span className='material-symbols-outlined'>add</span>
            <span className='material-symbols-outlined'>arrow_drop_down</span>
          </div>
        </div>
        <div className= {`${iscolumnDrop ? 'div-column-menu-expand' : 'div-column-menu' }`}>
            <ul>
              <li>Column 1</li>
              <li>Column 2</li>
              <li>Column 3</li>
              <li>Column 4</li>
            </ul>
        </div>
        <div className="div-row-details" onClick={() => {setIsrowDrop(!isrowDrop)}}>
          <p>Rows (2)</p>
          <div className="div-row-functions">
            <span className='material-symbols-outlined'>add</span>
            <span className='material-symbols-outlined'>arrow_drop_down</span>
          </div>
        </div>
        <div className= {`${isrowDrop ? 'div-row-menu-expand' : 'div-row-menu' }`}>
            <ul>
              <li>Row 1</li>
              <li>Row 2</li>
            </ul>
        </div>
        <div className="div-gap-details">
          <p>Gap</p>
          <div className="div-gap-dimensions">
            <div className="row-gap">
              <input type="number" />
              <select className="unit-selector row-gap-unit" name="" id="">
                <option value="px">px</option>
                <option value="vh">vh</option>
                <option value="vw">vw</option>
              </select>
            </div>
            <div className="column-gap">
              <input type="number" />
              <select className="unit-selector column-gap-unit" name="" id="">
                <option value="px">px</option>
                <option value="vh">vh</option>
                <option value="vw">vw</option>
              </select>
            </div>
            <span className='arrow-symbol material-symbols-outlined'>
              height
            </span>
            <span className='arrow-symbol material-symbols-outlined'>
              width
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutProperties