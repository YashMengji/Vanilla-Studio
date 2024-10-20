import React, { createContext, useRef, useState, useContext, useEffect } from 'react';

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

function handleReference(simwindowRef, resizableTemplateRef) {
    // const { setWidth, setHeight } = useContext(ResizeContext); 
    simwindow = simwindowRef.current;
    // simwindowRect = simwindow.getBoundingClientRect();
    let resizableTemplateElement = resizableTemplateRef.current;
    // elementRef.current = simwindow;

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
            
            // Render text related properties only for text elements
            targetElement.tagName == 'P' || targetElement.tagName == "H1" || targetElement.tagName == 'BUTTON' ? setIsTextElement(true) : setIsTextElement(false);

            // Clone the template and attach it to the dropped element
            resizable = resizableTemplateElement.cloneNode(true);
            resizable.style.display = 'block';
            resizable.style.position = 'absolute';
            resizable.style.width = e.target.offsetWidth + 'px';
            resizable.style.height = e.target.offsetHeight + 'px';
            resizable.style.top = e.target.offsetTop + 'px';
            resizable.style.left = e.target.offsetLeft + 'px';

            // getting nearest parent of selected element 
            targetElementParent = targetElement.parentElement;
            // getting dimentions of that parent for future use(ex: while dragging)
            currentParentRect = targetElementParent.getBoundingClientRect();
            // pushing the resizable template element inside the parent of selected element
            targetElementParent.appendChild(resizable);

            console.log(resizable.getBoundingClientRect());

            // simwindow.appendChild(resizable);  
            setWidth(resizable.offsetWidth);
            setHeight(resizable.offsetHeight);
            setXPosition(resizable.offsetLeft);
            setYPosition(resizable.offsetTop);
            elementRef.current = targetElement;
            
            resizeTemplate.current = resizable;

            // setWidth = resizable.offsetWidth;
            // setHeight = resizable.offsetHeight;
            // Apply the resize and drag functionality to the new resizable element
            applyResizeAndDrag(resizable, e.target,width, height, setWidth, setHeight, resizableTemplateRef, setXPosition, setYPosition);
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
                            resizable.style.top = event.clientY - currentParentRect.top + 'px';
                            resizable.style.left = event.clientX - currentParentRect.left + 'px';
                            break;
                        case 'top-center':
                            // const newHeight = rect.bottom - event.clientY;

                            // // If the calculated height is less than 2, set it to 2px, otherwise use the calculated height
                            // if (newHeight >= 2) {
                            //     resizable.style.height = newHeight + 'px';
                            //     resizable.style.top = event.clientY - currentParentRect.top + 'px';
                            // } else {
                            //     resizable.style.height = '2px';
                            //     resizable.style.top += 0;
                            // }
                            resizable.style.height = rect.bottom - event.clientY + 'px';
                            resizable.style.top = event.clientY - currentParentRect.top + 'px';
                            break;
                        case 'top-right':
                            resizable.style.width = event.clientX - rect.left + 'px';
                            resizable.style.height = rect.bottom - event.clientY + 'px';
                            resizable.style.top = event.clientY - currentParentRect.top + 'px';
                            break;
                        case 'right-center':
                            resizable.style.width = event.clientX - rect.left + 'px';
                            break;
                        case 'bottom-right':
                            resizable.style.width = event.clientX - rect.left + 'px';
                            resizable.style.height = event.clientY - rect.top + 'px';
                            break;
                        case 'bottom-center':
                            resizable.style.height = event.clientY - rect.top + 'px';
                            break;
                        case 'bottom-left':
                            resizable.style.width = rect.right - event.clientX + 'px';
                            resizable.style.height = event.clientY - rect.top + 'px';
                            resizable.style.left = event.clientX - currentParentRect.left + 'px';
                            break;
                        case 'left-center':
                            // Only update width if the new width is positive
                            const newWidth = rect.right - event.clientX;
                            // Adjust for nested parent elements
                            const adjustedLeft = event.clientX - currentParentRect.left;
                            
                            
                            if (newWidth >= 2) {  // Prevent shrinking too small
                                resizable.style.width = newWidth + 'px';
                                resizable.style.left = adjustedLeft + 'px';
                            } else {
                                resizable.style.width = '2px';  // Minimum width
                            }
                            break;
                    }

                    // switch(handleType) {
                    //     case 'top-left':
                    //         resizable.style.width = rect.right - event.clientX + 'px';
                    //         resizable.style.height = rect.bottom - event.clientY + 'px';
                    //         resizable.style.top = event.clientY - currentParentRect.top  + 'px';
                    //         resizable.style.left = event.clientX - currentParentRect.left  + 'px';
                    //         break;
                    //     case 'top-center':
                    //         // const newHeight = rect.bottom - event.clientY;

                    //         // If the calculated height is less than 2, set it to 2px, otherwise use the calculated height
                    //         // if (newHeight >= 2) {
                    //         //     resizable.style.height = newHeight + 'px';
                    //         //     resizable.style.top = event.clientY - currentParentRect.top + 'px';
                    //         // } else {
                    //         //     resizable.style.height = '2px';
                    //         //     resizable.style.top += 0;
                    //         // }
                            
                    //         resizable.style.height = rect.bottom - event.clientY + 'px';
                    //         resizable.style.top = event.clientY - currentParentRect.top + 'px';
                    //         break;
                    //     case 'top-right':
                    //         resizable.style.width = event.clientX - rect.left + 'px';
                    //         resizable.style.height = rect.bottom - event.clientY + 'px';
                    //         resizable.style.top = event.clientY - currentParentRect.top + 'px';
                    //         break;
                    //     case 'right-center':
                    //         resizable.style.width = event.clientX - rect.left + 'px';
                    //         break;
                    //     case 'bottom-right':
                    //         resizable.style.width = event.clientX - rect.left + 'px';
                    //         resizable.style.height = event.clientY - rect.top + 'px';
                    //         break;
                    //     case 'bottom-center':
                    //         resizable.style.height = event.clientY - rect.top+ 'px';
                    //         break;
                    //     case 'bottom-left':
                    //         resizable.style.width = rect.right - event.clientX + 'px';
                    //         resizable.style.height = event.clientY - rect.top + 'px';
                    //         resizable.style.left = event.clientX - currentParentRect.left  + 'px';
                    //         break;
                    //     case 'left-center':
                    //         resizable.style.width = rect.right - event.clientX + 'px';
                    //         resizable.style.left = event.clientX - currentParentRect.left + 'px';
                    //         break;
                    // }
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

                // Update context values
                setWidth(resizable.offsetWidth);
                setHeight(resizable.offsetHeight);
                setXPosition(resizable.offsetLeft);
                setYPosition(resizable.offsetTop);  
                // resizableTemplateRef.current.style.width = `${width}px`;
                // resizableTemplateRef.current.style.height = `${height}px`;
                // resizable.style.width = `${width}px`;
                // resizable.style.height = `${height}px`;
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
                // const newX = e.clientX - simwindowRect.left - dragOffsetX;
                // const newY = e.clientY - simwindowRect.top - dragOffsetY;
                const newX = e.clientX - currentParentRect.left - dragOffsetX;
                const newY = e.clientY - currentParentRect.top - dragOffsetY;
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


  return (
    <ResizeContext.Provider value={{...propertiesValue}}>
      {children}
    </ResizeContext.Provider>
  );
};
