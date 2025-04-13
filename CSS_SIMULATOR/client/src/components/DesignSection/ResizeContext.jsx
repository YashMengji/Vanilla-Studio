import React, { createContext, useRef, useState, useContext, useEffect } from 'react';
import { incElementCounter } from './javascripts/elementCounter';
// Create a context for the resizable element's dimensions
const ResizeContext = createContext();

export function useResizeContext() {
  return useContext(ResizeContext);
}

export const ResizeProvider = ({ children }) => {
  const simwindowRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [xposition, setXPosition] = useState(0);
  const [yposition, setYPosition] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [isTextElement, setIsTextElement] = useState(true);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [editorHtml, setEditorHtml] = useState('<h1>testing html</h1>');
  const [editorCss, setEditorCss] = useState('h1{color: red;}');
  const [iframeHtml, setIframeHtml] = useState("");
  const [isEditingCode, setIsEditingCode] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [pageContent, setPageContent] = useState(
    [
        {
          id: "element1",
          label: "header",
          children: [
            {id: "element2", label: "div"},
            {
              id: "element3",
              label: "nav",
              children: [
                {id: "element4", label: "link"},
                {id: "element5", label: "link"},
                {id: "element6", label: "link"}
              ]
            }
          ]
        },
        {
          id: "element7",
          label: "main",
          children: []
        },
        {
          id: "element8",
          label: "footer",
          children: [
            {id: "element9", label: "div"}
          ]
        }
      ]
  );

  const elementRef = useRef(null);
  const resizableTemplateRef = useRef(null);
  const resizeTemplate = useRef(null);
     
  const propertiesValue = {
    simwindowRef,
    isInitialized, 
    setIsInitialized,
    handleReference,
    handleDrop,
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
    iframeHtml, 
    setIframeHtml,
    isEditingCode, 
    setIsEditingCode,
    backgroundOpacity,
    setBackgroundOpacity,
    pageContent,
    setPageContent
  };


  let dimensionCallback;
let resizable, targetElement, targetElementParent;
let simwindow, simwindowRect, currentParentRect;

// handle creation of element from the pageContent state 
function updatePageContentHierarchy(parent, child) {
    let parentId = parent.getAttribute("id");
    let childId = child.getAttribute("id");
    let label = child.tagName.toLowerCase();
    if(child.children.length > 0 && child.children[0].tagName.toLowerCase() == "img") {
        label = "img";
    }
    // recursive function to update at different levels
    function updateHierarchy(elements) {
        return elements.map((element) => {
            if (element.id === parentId) {
                return {
                    ...element,
                    children: [
                        ...element.children, 
                        { id: childId, label: label, children: [] }
                    ]
                };
            } else if (element.children && element.children.length > 0) {
                // if parent has children then call updateHierarchy in parent's children property
                // because updateHierarchy method is used to update the array of objects
                return {
                    ...element,
                    children: updateHierarchy(element.children) // Recursively update children
                };
            }
            return element;
        });
    }

    setPageContent((prevContent) => updateHierarchy(prevContent));
    
}

// handle removal of element from the pageContent state 
function removeElementFromHierarchy(targetId) {
    // recursive function to removing an element at different levels
    function removeElement(elements) {
        return elements
            .map((element) => {
                // Remove the target element from children
                const filteredChildren = element.children
                    ? element.children.filter(child => child.id !== targetId)
                    : [];

                if (element.id === targetId) {
                    return null; // Remove the element itself
                }

                return {
                    ...element,
                    children: removeElement(filteredChildren) // Recursively update children
                };
            })
            .filter(Boolean); // Remove any `null` values (deleted elements)
    }

    setPageContent((prevContent) => removeElement(prevContent));
}

// handle drop event : 
function handleDrop(e) {
    e.preventDefault(); //this code prevents the default drag and drop behaviour of browser
    const selectedElement = e.dataTransfer.getData('source');
    console.log(selectedElement)
  
    //get the (x,y) position of the cursor to place element at that position when it is dropped
    const rect = e.target.getBoundingClientRect();
    const dropX = e.clientX - rect.left;
    const dropY = e.clientY - rect.top;
  
    // takes an element over which dragged element is to be dropped and the dragged element. it checks if e.target is resizable template or not
    function addNewElement(parent, child) {
        updatePageContentHierarchy(parent, child);
        parent.appendChild(child);
    }
  
    if (selectedElement === "title-img") {
      // Create a title element (e.g., h1 for main title) at the drop location
      const title = document.createElement('h1'); // Use 'h1' for main titles
      title.className = 'title-field';
      title.id = `element${incElementCounter()}`; // Generate a unique id for the title
      title.textContent = "Your Title Here"; // Set the title text
      title.style.position = 'relative';
      title.style.display = 'block';
      title.style.fontWeight = 'block';
      // title.style.left = dropX + 'px';
      // title.style.top = dropY + 'px';
      title.contentEditable = 'true';
      addNewElement(e.target, title);
    }
    else if (selectedElement === "image-img") {
      // Create an button at the drop location
      const image = document.createElement('img');
      const imgDiv = document.createElement('div');
      imgDiv.style.width = "100px";
      imgDiv.style.height = "100px";
      imgDiv.style.position = 'relative';
      imgDiv.id = `element${incElementCounter()}`;  

      image.className = 'image-field';
      image.id = `element${incElementCounter()}`; // Generate a unique id for the image  
      image.src = "/images/sample_img.jpg";
      image.style.display = 'block';
      image.style.width = "100%";
      image.style.height = "100%";
      // image.style.left = dropX + 'px';
      // image.style.top = dropY + 'px';
      imgDiv.appendChild(image);
      addNewElement(e.target, imgDiv);
    }
    else if (selectedElement === "para-img") {
      // Create a paragraph at the drop location
      const paragraph = document.createElement('p');
      paragraph.className = 'paragraph-field';
      paragraph.id = `element${incElementCounter()}`; // Generate a unique id for the paragraph
      paragraph.textContent = "Your default text here"; // Set default text for the paragraph
      paragraph.style.position = 'relative';
      paragraph.style.display = 'block';
      paragraph.style.width = "fit-content"; // Adjust width as needed
      paragraph.style.height = "fit-content"; // Adjust height as needed
      // paragraph.style.left = dropX + 'px';
      // paragraph.style.top = dropY + 'px';
      paragraph.contentEditable = 'true';
      addNewElement(e.target, paragraph);
    }
    else if (selectedElement === "button-img") {
      // Create a video element at the drop location
      const button = document.createElement('button');
      button.className = 'button-field';
      button.id = `element${incElementCounter()}`; // Generate a unique id
      // button.src = "/videos/sample_video.mp4"; 
      button.innerText = "Button";
      button.style.border = "0px solid white";
      button.style.height = "50px";
      button.style.width = "100px";
      button.style.position = 'relative';
      button.style.display = 'block';
      button.style.backgroundColor = 'black';
      button.style.color = 'white';
      button.contentEditable = 'true';
      // button.style.left = dropX + 'px';
      // button.style.top = dropY + 'px';
      addNewElement(e.target, button);
    }
    else if (selectedElement === "container-img") {
      // Create a video element at the drop location
      const container = document.createElement('div');
      container.className = 'container-field';
      container.id = `element${incElementCounter()}`; // Generate a unique id for the container
      container.style.position = 'relative';
      container.style.zIndex="0";
      // container.style.display = 'flex';
      // container.style.justifyContent = 'flex-start';
      container.style.backgroundColor = '#f0f8ff';
      container.style.width = "320px"; // Adjust width as needed
      container.style.height = "240px"; // Adjust height as needed
      // container.style.left = dropX + 'px';
      // container.style.top = dropY + 'px';
      container.style.border = '0px solid black';
      container.style.borderOpacity = '1';
      container.style.boxSizing = 'border-box';
      addNewElement(e.target, container);
    }
    else if (selectedElement === "link-img") {
      // Create a link element at the drop location
      const link = document.createElement('a');
      link.className = 'link-field';
      link.id = `element${incElementCounter()}`; // Generate a unique id for the link
      link.href = "#"; // Set the URL for the link
      link.textContent = "Visit Example"; // Set the display text for the link
      link.style.position = 'relative';
      link.style.display = 'block';
      // link.style.left = dropX + 'px';
      // link.style.top = dropY + 'px';
      addNewElement(e.target, link);
    }
    
  }

function handleReference() {
    let simwindow = simwindowRef.current;
    
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
                if(e.target.classList[1] != 'footerElement' && e.target.classList[0] == "section") {
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
            if(targetElement.classList[0] == "section" || targetElement.classList[0] == "section-child") {
                let controllers = simwindow.querySelectorAll(".handle");
                if(controllers) {
                    controllers.forEach((controller) => {
                        controller.remove();
                    })
                }
                // getting all section elements for further click event
                let sections = simwindow.querySelectorAll(".section");
                let sectionChildren = simwindow.querySelectorAll(".section-child");
                sections.forEach((section) => {
                    if(section.classList[1] == "selected"){
                        section.classList.remove("selected");
                    } 
                })
                sectionChildren.forEach((section) => {
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

                targetElement.classList.add("selected");
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
    //   resizable.remove();
      targetElement.remove();
      removeElementFromHierarchy(targetElement.getAttribute("id"));
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
