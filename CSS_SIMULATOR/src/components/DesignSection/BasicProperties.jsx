import React from 'react'
import {useState, useEffect} from "react"
// import {targetElement} from './javascripts/dragResize.js'

function BasicProperties() {

  const [borderOpacity, setBorderOpacity] = useState(1)
  const [widthInput, setWidthInput] = useState(0);
  // let targetElement = window.targetElement;
  //console.log(targetElement);
  

  
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
      <div className="div-break-between "></div>
      <div className="div-dimension-section">
        <div className="div-dimension-heading">
          Size
        </div>
        <div className="div-edit-dimension">
          <div className="div-xy-dim">
            <div className="div-x-dim">
              <div className="div-x-dim-text">
                X 
              </div>
              <div className="div-x-dim-input">
                <input type="number" className="x-dim-input" />
                <div className="div-px-text">px*</div>
              </div>
            </div>
            <div className="div-y-dim">
              <div className="div-y-dim-text">
                Y 
              </div> 
              <div className="div-y-dim-input">
                <input type="number" className="y-dim-input" />
                <div className="div-px-text">px*</div>
              </div>
            </div>
          </div>
          <div className="div-wh-dim">
            <div className="div-w-dim">
              <div className="div-w-dim-text">
                W 
              </div>
              <div className="div-w-dim-input">
                <input type="number" className="w-dim-input" />
                <div className="div-px-text">px*</div>
              </div>
            </div>
            <div className="div-h-dim">
              <div className="div-h-dim-text">
                H 
              </div> 
              <div className="div-h-dim-input">
                <input type="number" className="h-dim-input" />
                <div className="div-px-text">px*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-break-between border"></div>
      <div className="div-border-section">
        <div className="div-border-heading">
          Border
        </div>
        <div className="div-border-color">
          <div className="div-border-color-heading">
            Opacity & color
          </div>
          <div className="div-border-color-edit">
            <input type="color" className='border-color-input-color' />
            <input type="range" min="0" max="1" step="0.01" className='border-color-range' defaultValue="1" />
            <div className="div-border-color-input">
              <input type="number" className='border-color-input'/>
              <div className="div-percent-text">
                %
              </div>
            </div>
          </div>
        </div>
        <div className="div-border-width">
          <div className="div-border-width-heading">
            Width(px)
          </div>
          <div className="div-border-width-edit">
            <input type="range" min="0" max="14" step="1" defaultValue="0" className="border-width-range"/>
            <div className="div-border-width-input">
              <input type="number" className='border-width-input' />
              <div className="div-px-text">
                px
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-typography-section">
        <span>Text Properties</span><br /><br />
        <div className="div-select-text-type">
            <select name="" id="font-type">
              <option value="null">Text type</option>
              <option value="h1">h1</option>
              <option value="h2">h2</option>
              <option value="h3">h3</option>
              <option value="h4">h4</option>
              <option value="h5">h5</option>
              <option value="h6">h6</option>
              <option value="p">paragraph</option>
            </select>
        </div>
        <div className="div-select-font-family">
          <select name="" id="font-family">
            <option value="null">Font family</option> {/*here use an api to fetch font family and handle the api using asynchronous javascipt !*/}
          </select>
        </div>
        <div className="div-font-size">
          <span>Size</span>
          <div className="font-size">
            <input type="text" defaultValue={16}/>
            <select name="" id="unit-selector">
              <option value="px">px</option>
              <option value="pt">pt</option>
              <option value="pc">pc</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
            </select>
          </div>
        </div>
        <div className="div-font-style">
            <p>Font Style</p>
            <div id="font-style">
              <p><b>B</b></p>
              <p><i>I</i></p>
              <p><u>U</u></p>
              <p><strike>S</strike></p>
            </div>
        </div>
        <div className="div-font-alignment">
            <p>Text Alignment</p>
            <span className="material-symbols-outlined">
              format_align_left
            </span>
            <span className="material-symbols-outlined">
              format_align_center
            </span>
            <span className="material-symbols-outlined">
              format_align_right
            </span>
            <span className="material-symbols-outlined">
              format_align_justify
            </span>
        </div>
      </div>
    </div>
  )
}

export default BasicProperties