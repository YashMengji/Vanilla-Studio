// let targetElement = Window.targetElement;
let mainDiv = document.querySelector('.div-main');
// const resizableTemplate = document.getElementById('resizableTemplate');

let resizable, targetElement;

export function handleReference(simwindowRef, resizableTemplate) {

    let simwindow = simwindowRef.current;
    let resizableTemplateElement = resizableTemplate.current;

    simwindow.addEventListener('click', (e) => {
        if(
            e.target.classList[0] != 'div-simwindow' 
            && e.target.id != 'resizableTemplate' 
            && e.target.classList[0] != 'handle'
        ) { 
            targetElement = e.target;
            // console.log(targetElement);
            // Clone the template and attach it to the input
            // resizable = resizableTemplate.cloneNode(true);
            resizable = resizableTemplateElement;
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
                            resizable.style.top = event.clientY + 'px';
                            resizable.style.left = event.clientX + 'px';
                            break;
                        case 'top-center':
                            resizable.style.height = rect.bottom - event.clientY + 'px';
                            resizable.style.top = event.clientY + 'px';
                            break;
                        case 'top-right':
                            resizable.style.width = event.clientX - rect.left + 'px';
                            resizable.style.height = rect.bottom - event.clientY + 'px';
                            resizable.style.top = event.clientY + 'px';
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
                            resizable.style.left = event.clientX + 'px';
                            break;
                        case 'left-center':
                            resizable.style.width = rect.right - event.clientX + 'px';
                            resizable.style.left = event.clientX + 'px';
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
            resizable.addEventListener('mousedown', (e) => {
                if (isResizing) return;
                e.preventDefault();
                offsetX = e.clientX - resizable.getBoundingClientRect().left;
                offsetY = e.clientY - resizable.getBoundingClientRect().top;

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
                      
            });

            function onMouseMove(e) {
                if (isResizing) return;
                document.body.style.cursor = 'move';
                resizable.style.left = `${e.clientX - offsetX}px`;
                resizable.style.top = `${e.clientY - offsetY}px`;
                let rect = resizable.getBoundingClientRect();
                // THIS IF STATEMENT LIMITS ELEMENT TO SIMWINDOW ONLY
                // if(rect.top<=90 || rect.left<=225 || rect.right<=200 ){
                //   document.removeEventListener('mousemove', onMouseMove);
                //   document.removeEventListener('mouseup', onMouseUp);
                // }  
                updateTargetSize();
            }

            function onMouseUp() {
                document.body.style.cursor = 'default';
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

                     
}