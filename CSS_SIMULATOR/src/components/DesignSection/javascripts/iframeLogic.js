let simwindow;

export function getReference(simwindowRef) {
  simwindow = simwindowRef.current;
} 

function handleDrop(e, simwindowRef) {
  
  e.preventDefault(); //this code prevents the default drag and drop behaviour of browser

  const selectedElement = e.dataTransfer.getData('source');
  console.log(selectedElement)

  //get the (x,y) position of the cursor to place element at that position when it is dropped
  const dropX = e.clientX;
  const dropY = e.clientY;

  if (selectedElement === "title-img") {
    // Create a title element (e.g., h1 for main title) at the drop location
    const title = document.createElement('h1'); // Use 'h1' for main titles
    title.className = 'title-field';
    title.textContent = "Your Title Here"; // Set the title text
    title.style.position = 'absolute';
    title.style.display = 'block';
    title.style.fontWeight = 'block';
    title.style.left = dropX + 'px';
    title.style.top = dropY + 'px';
    simwindow.appendChild(title);
  }
  else if (selectedElement === "image-img") {
    // Create an button at the drop location
    const image = document.createElement('img');
    image.className = 'image-field';
    image.src = "/images/sample_img.jpg";
    image.style.position = 'absolute';
    image.style.display = 'block';
    image.style.width = "100px";
    image.style.height = "100px";
    image.style.left = dropX + 'px';
    image.style.top = dropY + 'px';
    simwindow.appendChild(image);
  }
  else if (selectedElement === "para-img") {
    // Create a paragraph at the drop location
    const paragraph = document.createElement('p');
    paragraph.className = 'paragraph-field';
    paragraph.textContent = "Your default text here"; // Set default text for the paragraph
    paragraph.style.position = 'absolute';
    paragraph.style.display = 'block';
    paragraph.style.width = "200px"; // Adjust width as needed
    paragraph.style.minHeight = "100px"; // Adjust height as needed
    paragraph.style.left = dropX + 'px';
    paragraph.style.top = dropY + 'px';
    simwindow.appendChild(paragraph);
  }
  else if (selectedElement === "video-img") {
    // Create a video element at the drop location
    const video = document.createElement('video');
    video.className = 'video-field';
    video.src = "/videos/sample_video.mp4"; // Set the source of your video
    video.style.position = 'absolute';
    video.style.display = 'block';
    video.style.width = "320px"; // Adjust width as needed
    video.style.height = "240px"; // Adjust height as needed
    video.controls = true; // Show video controls like play, pause, etc.
    video.style.left = dropX + 'px';
    video.style.top = dropY + 'px';
    simwindow.appendChild(video);
  }
  else if (selectedElement === "container-img") {
    // Create a video element at the drop location
    const container = document.createElement('div');
    container.className = 'container-field';
    container.src = "/videos/sample_video.mp4"; // Set the source of your video
    container.style.position = 'absolute';
    container.style.display = 'block';
    container.style.backgroundColor = 'rgb(255, 242, 231)';
    container.style.width = "320px"; // Adjust width as needed
    container.style.height = "240px"; // Adjust height as needed
    container.style.left = dropX + 'px';
    container.style.top = dropY + 'px';
    simwindow.appendChild(container);
  }
  else if (selectedElement === "link-img") {
    // Create a link element at the drop location
    const link = document.createElement('a');
    link.className = 'link-field';
    link.href = "#"; // Set the URL for the link
    link.textContent = "Visit Example"; // Set the display text for the link
    link.style.position = 'absolute';
    link.style.display = 'block';
    link.style.left = dropX + 'px';
    link.style.top = dropY + 'px';
    simwindow.appendChild(link);
  }

}

function allowDrop(event) {
  event.preventDefault(); // Necessary to allow dropping
}

export {handleDrop, allowDrop};