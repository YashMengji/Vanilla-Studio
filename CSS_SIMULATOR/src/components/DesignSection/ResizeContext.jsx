import React, { createContext, useRef, useState, useContext, useEffect } from 'react';
import { incElementCounter } from './javascripts/elementCounter';
// Create a context for the resizable element's dimensions
const ResizeContext = createContext();

export function useResizeContext() {
  return useContext(ResizeContext);
}

export const ResizeProvider = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [xposition, setXPosition] = useState(0);
  const [yposition, setYPosition] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [isTextElement, setIsTextElement] = useState(true);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [editorHtml, setEditorHtml] = useState('');
  const [editorCss, setEditorCss] = useState('');
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  const elementRef = useRef(null);
  const resizableTemplateRef = useRef(null);
  const resizeTemplate = useRef(null);
     
  const propertiesValue = {
    handleReference,
    width,
    setWidth,
    height,
    setHeight,
    elementRef,
    resizableTemplateRef,
    xposition,
    yposition,
    setXPosition,
    setYPosition,
    resizeTemplate,
    borderWidth,
    setBorderWidth,
    borderRadius,
    setBorderRadius,
    isTextElement,
    setIsTextElement,
    showCodeEditor,
    setShowCodeEditor,
    editorHtml,
    setEditorHtml,
    editorCss,
    setEditorCss,
    backgroundOpacity,
    setBackgroundOpacity,
  };


  let dimensionCallback;
let resizable, targetElement, targetElementParent;
let simwindow, simwindowRect, currentParentRect;

function handleReference(simwindowRef) {
    simwindow = simwindowRef.current;
    
    // create a plus icon for adding new section 
    let addBtn = document.createElement('div');
    let plusIcon = document.createElement('span');
    plusIcon.classList.add("material-symbols-outlined");
    plusIcon.textContent = "add";

    addBtn.setAttribute('class', 'add-section-btn');
    
    addBtn.appendChild(plusIcon);
    
    addBtn.addEventListener('click', () => {
        // console.log(addBtn.parentElement);
        let section = document.createElement('div');
        section.style = "position: relative; height: 100vh;";
        section.classList.add('section');
        section.id = `element${incElementCounter()}`;
        addBtn.parentElement.insertAdjacentElement("afterend", section);
        // simwindow.appendChild(section);
    })
    // hover effects 
    simwindow.addEventListener('mouseover', (e) => {
        if(e.target.classList[0] != 'div-simwindow') {
            if(e.target.classList[0] != "add-section-btn" && e.target.classList[0] != "material-symbols-outlined") {
                e.target.classList.add('element-hover');
                if(e.target.classList[1] != 'footerElement') {
                    e.target.appendChild(addBtn);
                }
            } 
        }
          
    })

    simwindow.addEventListener('mouseout', (e) => {
        // Check if mouseout is leaving the section entirely
        const isLeavingSection = !e.relatedTarget || !e.target.contains(e.relatedTarget);
    
        if (isLeavingSection) {
            e.target.classList.remove('element-hover');
            if (e.target.classList[0] === "section") {
                addBtn.remove();
            }
        }
    });

    simwindow.addEventListener('click', (e) => {
        // this is condition for click event
        if(
            e.target.classList[0] != 'div-simwindow' 
            && e.target.classList[0] != 'material-symbols-outlined'
            && e.target.classList[0] != 'handle'
        ) { 
            addBtn.remove();
            targetElement = e.target;
            console.log("target element : ",targetElement);
            // Render text related properties only for text elements
            targetElement.tagName == 'P' || targetElement.tagName == "H1" || targetElement.tagName == 'BUTTON' ? setIsTextElement(true) : setIsTextElement(false);

            // specific behavior for simwindow sections 
            let sectionElement, isChild = false;
            if(targetElement.parentElement.classList[0] == "section") {
                isChild = true;
            }
            if(targetElement.classList[0] == "section" || isChild) {
                let controllers = simwindow.querySelectorAll(".handle");
                if(controllers) {
                    controllers.forEach((controller) => {
                        controller.remove();
                    })
                }
                // getting all section elements for further click event
                let sections = simwindow.querySelectorAll(".section");
                sections.forEach((section) => {
                    if(section.classList[1] == "selected"){
                        section.classList.remove("selected");
                    } 
                })
                targetElement.classList.add("selected");

            } else {
                
                let sections = simwindow.querySelectorAll(".section");
                sections.forEach((section) => {
                    if(section.classList[1] == "selected"){
                        section.classList.remove("selected");
                    } 
                })
                let controllers = simwindow.querySelectorAll(".handle");
                if(controllers) {
                    controllers.forEach((controller) => {
                        controller.remove();
                    })
                }
                // apply resize controllers on the targetElement
                for(let i = 0; i < 3; i++) {
                    let controller = document.createElement('div');
                    controller.classList.add("handle");
                    switch(i) {
                        case 0: controller.classList.add("right-center");
                                break;
                        case 1: controller.classList.add("bottom-right");
                                break;
                        case 2: controller.classList.add("bottom-center");
                                break;
                    }  
                    if(targetElement.classList[0] == "image-field") {
                        targetElement.parentElement.appendChild(controller);
                    } else {
                        targetElement.appendChild(controller);
                    }
                    
                }

                
            }
            // getting nearest parent of selected element 
            targetElementParent = targetElement.parentElement;
            // getting dimentions of that parent for future use(ex: while dragging)
            currentParentRect = targetElementParent.getBoundingClientRect();
            // pushing the resizable template element inside the parent of selected element

            elementRef.current = targetElement;
            console.log("element reference : ", elementRef.current);
            
            // if the selected element is img then do this :
            if(targetElement.classList[0] == 'image-field') {
                targetElement = targetElement.parentElement;
                console.log(targetElement);
            }
            // Apply the resize and drag functionality to the new resizable element
            applyResizeAndDrag(resizable, targetElement,width, height, setWidth, setHeight, resizableTemplateRef, setXPosition, setYPosition);

            
        }
    });

    simwindow.addEventListener('mousedown', (e) => {
      if (
          resizable 
          && e.target.id != 'resizableTemplate'
          && e.target.classList[0] != 'handle'
      ) {
          resizable.remove();
        //   targetElement.contentEditable = 'false';
      }
    });
}


window.addEventListener('keydown', (e) => {
  if(e.key == 'Delete') {
      resizable.remove();
      targetElement.remove();
  }
  if(e.key == 'e'){
        targetElement.contentEditable = 'true';
    }
    if(e.key == 'Enter') {
        targetElement.contentEditable = 'false';
    }
});


window.addEventListener('keydown', (e) => {
    
})


function applyResizeAndDrag(resizable, target, width, height, setWidth, setHeight, resizableTemplateRef, setXPosition, setYPosition) {
            // All code below is of RESIZE (below resize is drag)
            const handles = target.querySelectorAll('.handle');
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
                    const rect = target.getBoundingClientRect();

                    switch(handleType) {
                        case 'top-left':
                            target.style.width = rect.right - event.clientX + 'px';
                            target.style.height = rect.bottom - event.clientY + 'px';
                            target.style.top = event.clientY - currentParentRect.top + 'px';
                            target.style.left = event.clientX - currentParentRect.left + 'px';
                            break;
                        case 'top-center':
                            
                            target.style.height = rect.bottom - event.clientY + 'px';
                            target.style.top = event.clientY - currentParentRect.top + 'px';
                            break;
                        case 'top-right':
                            target.style.width = event.clientX - rect.left + 'px';
                            target.style.height = rect.bottom - event.clientY + 'px';
                            target.style.top = event.clientY - currentParentRect.top + 'px';
                            break;
                        case 'right-center':
                            target.style.width = event.clientX - rect.left + 'px';
                            break;
                        case 'bottom-right':
                            target.style.width = event.clientX - rect.left + 'px';
                            target.style.height = event.clientY - rect.top + 'px';
                            break;
                        case 'bottom-center':
                            target.style.height = event.clientY - rect.top + 'px';
                            break;
                        case 'bottom-left':
                            target.style.width = rect.right - event.clientX + 'px';
                            target.style.height = event.clientY - rect.top + 'px';
                            target.style.left = event.clientX - currentParentRect.left + 'px';
                            break;
                        case 'left-center':
                            // Only update width if the new width is positive
                            const newWidth = rect.right - event.clientX;
                            // Adjust for nested parent elements
                            const adjustedLeft = event.clientX - currentParentRect.left;
                            
                            
                            if (newWidth >= 2) {  // Prevent shrinking too small
                                target.style.width = newWidth + 'px';
                                target.style.left = adjustedLeft + 'px';
                            } else {
                                target.style.width = '2px';  // Minimum width
                            }
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
            //   target.style.width = resizable.offsetWidth + 'px';
            //   target.style.height = resizable.offsetHeight + 'px';
            //   target.style.top = resizable.offsetTop + 'px';
            //   target.style.left = resizable.offsetLeft + 'px';

                // Update context values
                setWidth(target.offsetWidth);
                setHeight(target.offsetHeight);
                setXPosition(target.offsetLeft);
                setYPosition(target.offsetTop);  
                // resizableTemplateRef.current.style.width = `${width}px`;
                // resizableTemplateRef.current.style.height = `${height}px`;
                // resizable.style.width = `${width}px`;
                // resizable.style.height = `${height}px`;
            }

            // All code below is For DRAG
            let dragOffsetX;
            let dragOffsetY;
            // target.addEventListener('mousedown', (e) => {
            //     if (isResizing) return;
            //     e.preventDefault();
            //     //rect -> dimensions of resizable template div
            //     let rect = target.getBoundingClientRect()

            //     dragOffsetX = e.clientX - rect.left;
            //     dragOffsetY = e.clientY - rect.top;
                
            //     // dragOffsetX = e.clientX;
            //     // dragOffsetY = e.clientY;

            //     document.addEventListener('mousemove', onMouseMove);
            //     document.addEventListener('mouseup', onMouseUp);
                      
            // });

            // function onMouseMove(e) {
            //     if (isResizing) return;
            //     document.body.style.cursor = 'move';
            //     // const newX = e.clientX - simwindowRect.left - dragOffsetX;
            //     // const newY = e.clientY - simwindowRect.top - dragOffsetY;
            //     const newX = e.clientX - currentParentRect.left - dragOffsetX;
            //     const newY = e.clientY - currentParentRect.top - dragOffsetY;
            //     target.style.left = `${newX}px`;
            //     target.style.top = `${newY}px`;

            //     updateTargetSize();
            // }

            // function onMouseUp() {
            //     document.body.style.cursor = 'default';
            //     document.removeEventListener('mousemove', onMouseMove);
            //     document.removeEventListener('mouseup', onMouseUp);
            // }
}


  return (
    <ResizeContext.Provider value={{...propertiesValue}}>
      {children}
    </ResizeContext.Provider>
  );
};
