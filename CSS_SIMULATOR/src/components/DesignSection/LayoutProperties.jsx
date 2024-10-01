import React, {useState} from 'react'
import './Css/LayoutProperties.css'
import { useResizeContext } from './ResizeContext';
function LayoutProperties() {

  const [iscolumnDrop, setIsColumnDrop] = useState(false);
  const [isrowDrop, setIsrowDrop] = useState(false);
  const {elementRef} = useResizeContext();

  let child1, child2, child3, child4;
  let currentElement = elementRef.current;
  function createTemplate(typeOfLayout, children) {
    console.log(currentElement);
    let template = document.createElement('div');
    let childStyle = `outline: 2px solid blue`;
    if(children == 2) {
        child1 = document.createElement('div');
        child2 = document.createElement('div');
    } else if(children == 3) {
        child1 = document.createElement('div');
        child2 = document.createElement('div');
        child3 = document.createElement('div');
    } else if(children == 4) {
        child1 = document.createElement('div');
        child2 = document.createElement('div');
        child3 = document.createElement('div');
        child4 = document.createElement('div');
    }

    if(typeOfLayout == 'layout-1') {
        child1.style = `outline: 2px solid blue; position: relative;`;
            child2.style = `outline: 2px solid blue; position: relative;`;

            template.style = `
            outline: 2px solid red;
            display:grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            position: absolute;
            `;
            template.appendChild(child1);
            template.appendChild(child2);
            currentElement.appendChild(template);
    }else if(typeOfLayout == 'layout-2') {
        child1.style = `outline: 2px solid blue`;
            child2.style = `outline: 2px solid blue`;
            child3.style = `outline: 2px solid blue`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
            height: 100%;
            `
            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
    } else if(typeOfLayout == 'layout-3') {
        child1.style = `outline: 2px solid blue`;
            child2.style = `outline: 2px solid blue`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `
            template.appendChild(child1);
            template.appendChild(child2);
            simwindow.appendChild(template);
    } else if(typeOfLayout == 'layout-4') {
        child1.style = `outline: 2px solid blue`;
            child2.style = `outline: 2px solid blue`;
            child3.style = `outline: 2px solid blue`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-rows: repeat(3, 1fr);
            width: 100%;
            height: 100%;
            `
            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
    } else if(typeOfLayout == 'layout-5') {
        child1.style = `outline: 2px solid blue; grid-row: 1 / span 2;`;
            child2.style = `outline: 2px solid blue;`;
            child3.style = `outline: 2px solid blue;`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
    } else if(typeOfLayout == 'layout-6') {
        child1.style = `outline: 2px solid blue; `;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue; grid-row: 1 / span 2; grid-column: 2 / 3`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
    } else if(typeOfLayout == 'layout-7') {
        child1.style = `outline: 2px solid blue; grid-column: 1 / span 2`;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue;`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
    } else if(typeOfLayout == 'layout-8') {
        child1.style = `outline: 2px solid blue; `;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue; grid-column: 1 / span 2`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
    } else if(typeOfLayout == 'layout-9') {
        child1.style = `outline: 2px solid blue; `;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue;`;
            child4.style = `outline: 2px solid blue;`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            template.appendChild(child4);
            simwindow.appendChild(template);
    }

}

function handleClick(e) {
    
    let layoutType = e.target.classList[0];
    console.log(layoutType);
    switch(layoutType) {
        case "layout-1" : 
            createTemplate("layout-1", 2);
        break;
        case "layout-2" :
            createTemplate("layout-2", 3);
        break;
        case "layout-3" :
            createTemplate("layout-3", 2);
        break;
        case "layout-4":
            createTemplate("layout-4", 3);
        break;
        case "layout-5":
            createTemplate("layout-5", 3);
        break;
        case "layout-6":
            createTemplate("layout-6", 3);
        break;
        case "layout-7":
            createTemplate("layout-7", 3);
        break;
        case "layout-8":
            createTemplate("layout-8", 3);
        break;
        case "layout-9":
            createTemplate("layout-9", 4);
    } 
}



  return (
    <div className="div-layout-properties-panel">
      <div className="div-layout-heading">
        Layout
      </div>
      <div className="div-choose-layout">
        <p>Choose Layout</p>
        <div className="div-layout-options-grid"> 
          {/* 1 */}
          <div className="div-layout-option" >
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-1' onClick={handleClick}>
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="30" y1="60" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            </svg>

          </div>
          <div className="div-layout-option" > 
            {/* 2 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-2' onClick={handleClick}>
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="20" y1="60" x2="20" y2="0" stroke="black" strokeWidth="2"/>
              <line x1="40" y1="60" x2="40" y2="0" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option" >
            {/* 3 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-3' onClick={handleClick}>
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option" >
            {/* 4 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-4' onClick={handleClick}>
            <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="0" y1="20" x2="60" y2="20" stroke="black" strokeWidth="2"/>
            <line x1="0" y1="40" x2="60" y2="40" stroke="black" strokeWidth="2"/>

          </svg>
          </div>
          <div className="div-layout-option" >
            {/* 5 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-5' onClick={handleClick}>
            <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="30" y1="60" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            <line x1="30" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
          </svg>
          </div>
          <div className="div-layout-option" >
            {/* 6 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-6' onClick={handleClick}>
            <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="30" y1="60" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            <line x1="0" y1="30" x2="30" y2="30" stroke="black" strokeWidth="2"/>

          </svg>
          </div>
          <div className="div-layout-option" >
            {/* 7 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-7' onClick={handleClick}>
              <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
              <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
              <line x1="30" y1="30" x2="30" y2="60" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option" >
            {/* 8 */}
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-8' onClick={handleClick}>
                <rect x="0" y="0" width="60" height="60" stroke="black" fill="none" strokeWidth="3"/>
                <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="2"/>
                <line x1="30" y1="30" x2="30" y2="0" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <div className="div-layout-option" >
            {/* 9 */}
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" className='layout-9' onClick={handleClick}>
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