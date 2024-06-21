import React from 'react'

function BasicProperties() {
  return (
    <div className="div-basic-properties-panel">
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