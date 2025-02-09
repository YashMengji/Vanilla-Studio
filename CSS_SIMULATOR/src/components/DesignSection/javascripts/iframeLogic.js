import { incElementCounter, decElementCounter } from "./elementCounter";
let simwindow, pageContent, setPageContent;

function getReference(pageContent, setPageContent) {
  pageContent = pageContent;
  setPageContent = setPageContent;
}

function handleDrop(e) {
  e.preventDefault(); //this code prevents the default drag and drop behaviour of browser
  const selectedElement = e.dataTransfer.getData('source');
  console.log(selectedElement)

  //get the (x,y) position of the cursor to place element at that position when it is dropped
  const rect = e.target.getBoundingClientRect();
  const dropX = e.clientX - rect.left;
  const dropY = e.clientY - rect.top;

  // takes an element over which dragged element is to be dropped and the dragged element. it checks if e.target is resizable template or not
  function checkForResizeTemplate(element, child) {
    if(element.classList[0] == "resizable") {
      alert("First unselect the element and then try nesting !");
      decElementCounter();
    } else {
      console.log(element);
      element.appendChild(child);
    }
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
    checkForResizeTemplate(e.target, title);
  }
  else if (selectedElement === "image-img") {
    // Create an button at the drop location
    const image = document.createElement('img');
    const imgDiv = document.createElement('div');
    imgDiv.style.width = "100px";
    imgDiv.style.height = "100px";
    imgDiv.style.position = 'relative';

    image.className = 'image-field';
    image.id = `element${incElementCounter()}`; // Generate a unique id for the image  
    image.src = "/images/sample_img.jpg";
    image.style.display = 'block';
    image.style.width = "100%";
    image.style.height = "100%";
    // image.style.left = dropX + 'px';
    // image.style.top = dropY + 'px';
    imgDiv.appendChild(image);
    checkForResizeTemplate(e.target, imgDiv);
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
    checkForResizeTemplate(e.target, paragraph);
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
    checkForResizeTemplate(e.target, button);
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
    checkForResizeTemplate(e.target, container);
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
    checkForResizeTemplate(e.target, link);
  }
  
}

function allowDrop(event) {
  event.preventDefault(); // Necessary to allow dropping
}

export {handleDrop, allowDrop, getReference};