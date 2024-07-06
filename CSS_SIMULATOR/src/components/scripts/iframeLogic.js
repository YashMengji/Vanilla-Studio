export function handleDrop(e) {
  
  e.preventDefault(); //this code prevents the default drag and drop behaviour of browser

  const selectedElement = e.dataTransfer.getData('source');
  console.log(selectedElement)

  //get the (x,y) position of the cursor to place element at that position when it is dropped
  const dropX = e.clientX;
  const dropY = e.clientY;

  if (selectedElement === "title-img") {

    // Create an input field at the drop location
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'input-field';
    inputField.style.position = 'absolute';
    inputField.style.display = 'block';
    inputField.style.left = dropX + 'px';
    inputField.style.top = dropY + 'px';
    inputField.style.cursor = 'grab';
    document.body.querySelector(".div-main").appendChild(inputField);
    inputField.focus();
    // dragElement(inputField);
    inputField.addEventListener('click', (e) => {
      // enableResize(e.target);
    });
    // inputField.onclick = "enableResize(inputField)";
  }
  // else if (selectedElement === "image-img") {

  //   // Create an button at the drop location
  //   const button = document.createElement('button');
  //   button.className = 'button-field';
  //   button.innerHTML = "Click me";
  //   button.style.position = 'absolute';
  //   button.style.display = 'block';
  //   button.style.left = dropX + 'px';
  //   button.style.top = dropY + 'px';
  //   document.body.querySelector(".div-main").appendChild(button);

  //   dragElement(button);
  //   button.addEventListener('click', (e) => {
  //     enableResize(e.target);
  //   });
  // }
}

export function allowDrop(event) {
  event.preventDefault(); // Necessary to allow dropping
}
