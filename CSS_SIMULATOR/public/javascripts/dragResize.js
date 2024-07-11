let mainDiv = document.querySelector('.div-main');
const resizableTemplate = document.getElementById('resizableTemplate');
let resizable;
mainDiv.addEventListener('click', (e) => {
    console.log(e.target.id);
    if (resizable) {
        resizable.remove();
    }
    if(e.target.id != 'main'){
        // Clone the template and attach it to the input
        resizable = resizableTemplate.cloneNode(true);
        resizable.style.display = 'block';
        resizable.style.position = 'absolute';
        resizable.style.width = e.target.offsetWidth + 'px';
        resizable.style.height = e.target.offsetHeight + 'px';
        resizable.style.top = e.target.offsetTop + 'px';
        resizable.style.left = e.target.offsetLeft + 'px';

        document.body.appendChild(resizable);

        // Apply the resize and drag functionality to the new resizable element
        applyResizeAndDrag(resizable, e.target);
    }
});
// const targetInput = document.getElementById('targetInput');
//     const resizableTemplate = document.getElementById('resizableTemplate');
//     let resizable;

//     targetInput.addEventListener('click', () => {
//             // Remove any existing resizable element
//             if (resizable) {
//                 resizable.remove();
//             }

//             // Clone the template and attach it to the input
//             resizable = resizableTemplate.cloneNode(true);
//             resizable.style.display = 'block';
//             resizable.style.width = targetInput.offsetWidth + 'px';
//             resizable.style.height = targetInput.offsetHeight + 'px';
//             resizable.style.top = targetInput.offsetTop + 'px';
//             resizable.style.left = targetInput.offsetLeft + 'px';

//             document.body.appendChild(resizable);

//             // Apply the resize and drag functionality to the new resizable element
//             applyResizeAndDrag(resizable, targetInput);
//     });

    function applyResizeAndDrag(resizable, target) {
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
                updateTargetSize();
            }

            function onMouseUp() {
                document.body.style.cursor = 'default';
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            function updateTargetSize() {
                target.style.width = resizable.offsetWidth + 'px';
                target.style.height = resizable.offsetHeight + 'px';
                target.style.top = resizable.offsetTop + 'px';
                target.style.left = resizable.offsetLeft + 'px';
            }
        }