import React from 'react'
import {useState, useEffect} from "react"

// import {targetElement} from './javascripts/dragResize.js'

function BasicProperties() {



let mainDiv = document.querySelector('.div-main');

let resizable, targetElement;
let simwindow, simwindowRect;



const handleReference = (simwindowRef, resizableTemplate) => {

    simwindow = simwindowRef.current;
    simwindowRect = simwindow.getBoundingClientRect();
    let resizableTemplateElement = resizableTemplate.current;

    simwindow.addEventListener('click', (e) => {
        if(
            e.target.classList[0] != 'div-simwindow' 
            && e.target.id != 'resizableTemplate' 
            && e.target.classList[0] != 'handle'
        ) { 
            if (resizable) {
                resizable.remove();
            }

            targetElement = e.target;
            setWidthInput(Number(targetElement.style.width.slice(0, -2)));
            console.log(targetElement);
            // Clone the template and attach it to the dropped element
            resizable = resizableTemplateElement.cloneNode(true);
            // resizable = resizableTemplateElement;
            resizable.style.display = 'block';
            resizable.style.position = 'absolute';
            resizable.style.width = e.target.offsetWidth + 'px';
            resizable.style.height = e.target.offsetHeight + 'px';
            resizable.style.top = e.target.offsetTop + 'px';
            resizable.style.left = e.target.offsetLeft + 'px';

            simwindow.appendChild(resizable);

            // Apply the resize and drag functionality to the new resizable element
            applyResizeAndDrag(resizable, e.target);
            // Make simwindow focusable and set focus to it
        }
    });

    simwindow.addEventListener('mousedown', (e) => {
      if (
          resizable 
          && e.target.id != 'resizableTemplate'
          && e.target.classList[0] != 'handle'
      ) {
          resizable.remove();
      }
    });    
}

// Attach handleReference to the component
BasicProperties.handleReference = handleReference;

window.addEventListener('keydown', (e) => {
  if(e.key == 'Delete') {
      resizable.remove();
      targetElement.remove();
  }
});

function applyResizeAndDrag(resizable, target) {
            // All code below is of RESIZE (below resize is drag)
            const handles = resizable.querySelectorAll('.handle');
            let offsetX, offsetY, isResizing = false;

            handles.forEach(handle => {
                handle.addEventListener('mousedown', function(e) {
                    isResizing = true;
                    initResize(e, handle.classList[1]);
                });
            });

            function initResize(e, handleType) {
                function getCursorType(handleType) {
                    switch(handleType) {
                        case 'top-left': return 'nw-resize';
                        case 'top-center': return 'n-resize';
                        case 'top-right': return 'ne-resize';
                        case 'right-center': return 'e-resize';
                        case 'bottom-right': return 'se-resize';
                        case 'bottom-center': return 's-resize';
                        case 'bottom-left': return 'sw-resize';
                        case 'left-center': return 'w-resize';
                        default: return 'default';
                    }
                }

                document.body.style.cursor = getCursorType(handleType);

                window.addEventListener('mousemove', resize);
                window.addEventListener('mouseup', stopResize);

                function resize(event) {
                    const rect = resizable.getBoundingClientRect();

                    switch(handleType) {
                        case 'top-left':
                            resizable.style.width = rect.right - event.clientX + 'px';
                            resizable.style.height = rect.bottom - event.clientY + 'px';
                            resizable.style.top = event.clientY - simwindowRect.top  + 'px';
                            resizable.style.left = event.clientX - simwindowRect.left  + 'px';
                            break;
                        case 'top-center':
                            resizable.style.height = rect.bottom - event.clientY + 'px';
                            resizable.style.top = event.clientY - simwindowRect.top + 'px';
                            break;
                        case 'top-right':
                            resizable.style.width = event.clientX - rect.left + 'px';
                            resizable.style.height = rect.bottom - event.clientY + 'px';
                            resizable.style.top = event.clientY - simwindowRect.top + 'px';
                            break;
                        case 'right-center':
                            resizable.style.width = event.clientX - rect.left + 'px';
                            break;
                        case 'bottom-right':
                            resizable.style.width = event.clientX - rect.left + 'px';
                            resizable.style.height = event.clientY - rect.top + 'px';
                            break;
                        case 'bottom-center':
                            resizable.style.height = event.clientY - rect.top+ 'px';
                            break;
                        case 'bottom-left':
                            resizable.style.width = rect.right - event.clientX + 'px';
                            resizable.style.height = event.clientY - rect.top + 'px';
                            resizable.style.left = event.clientX- simwindowRect.left  + 'px';
                            break;
                        case 'left-center':
                            resizable.style.width = rect.right - event.clientX + 'px';
                            resizable.style.left = event.clientX - simwindowRect.left + 'px';
                            break;
                    }
                    updateTargetSize();
                }

                function stopResize() {
                    document.body.style.cursor = 'default';
                    window.removeEventListener('mousemove', resize);
                    window.removeEventListener('mouseup', stopResize);
                    isResizing = false;
                    
                }
            }

            function updateTargetSize() {
              target.style.width = resizable.offsetWidth + 'px';
              target.style.height = resizable.offsetHeight + 'px';
              target.style.top = resizable.offsetTop + 'px';
              target.style.left = resizable.offsetLeft + 'px';
            }

            // All code below is For DRAG
            let dragOffsetX;
            let dragOffsetY;
            resizable.addEventListener('mousedown', (e) => {
                if (isResizing) return;
                e.preventDefault();
                //rect -> dimensions of resizable template div
                let rect = resizable.getBoundingClientRect()

                dragOffsetX = e.clientX - rect.left;
                dragOffsetY = e.clientY - rect.top;

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
                      
            });

            function onMouseMove(e) {
                if (isResizing) return;
                document.body.style.cursor = 'move';
                const newX = e.clientX - simwindowRect.left - dragOffsetX;
                const newY = e.clientY - simwindowRect.top - dragOffsetY;
                resizable.style.left = `${newX}px`;
                resizable.style.top = `${newY}px`;

                updateTargetSize();
            }

            function onMouseUp() {
                document.body.style.cursor = 'default';
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

                     
}


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
              <div className="div-w-dim-text" onClick={()=>{console.log(widthInput)}}>
                W 
              </div>
              <div className="div-w-dim-input">
                <input type="number" className="w-dim-input" value={widthInput} onChange={(e)=>{setWidthInput(e.target.value)}}/>
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