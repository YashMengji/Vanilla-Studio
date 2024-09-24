import React, {useState} from 'react'
import './Css/LayoutProperties.css'
import { handleClick } from './javascripts/layoutLogic';

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
          {/* 1 */}
          <div className="div-layout-option layout-1" onClick={handleClick}>
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="30" y1="60" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            </svg>

          </div>
          <div className="div-layout-option layout-2" onClick={handleClick}> 
            {/* 2 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="20" y1="60" x2="20" y2="0" stroke="black" strokeWidth="2"/>
              <line x1="40" y1="60" x2="40" y2="0" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option layout-3" onClick={handleClick}>
            {/* 3 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option layout-4" onClick={handleClick}>
            {/* 4 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="0" y1="20" x2="60" y2="20" stroke="black" strokeWidth="2"/>
            <line x1="0" y1="40" x2="60" y2="40" stroke="black" strokeWidth="2"/>

          </svg>
          </div>
          <div className="div-layout-option layout-5" onClick={handleClick}>
            {/* 5 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="30" y1="60" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            <line x1="30" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
          </svg>
          </div>
          <div className="div-layout-option layout-6" onClick={handleClick}>
            {/* 6 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="30" y1="60" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            <line x1="0" y1="30" x2="30" y2="30" stroke="black" strokeWidth="2"/>

          </svg>
          </div>
          <div className="div-layout-option layout-7" onClick={handleClick}>
            {/* 7 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
              <line x1="30" y1="30" x2="30" y2="60" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option layout-8" onClick={handleClick}>
            {/* 8 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
                <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
                <line x1="30" y1="30" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option layout-9" onClick={handleClick}>
            {/* 9 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
              <line x1="30" y1="60" x2="30" y2="0" stroke="black" strokeWidth="2"/>
          </svg>
          </div>
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