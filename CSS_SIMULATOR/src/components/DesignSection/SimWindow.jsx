import { useEffect } from 'react'
import './Css/SimWindow.css'

function SimWindow() {




  function iframeConfig() {
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    let iframe = document.querySelector('iframe')
    iframeDoc.open();
    iframeDoc.write(
      `<html>

<head>
  <style>
    * {
      \nmargin: 0;
      \npadding: 0;
      \nbox-sizing: border-box\n
    }

    \n.div-main {
      \nposition: relative;
      \nbackground-color: lightcoral;
      \noverflow-x: auto;
      \nheight: 100vh;
    }

    .button-field {
      padding: 10px 20px;
      color: white;
      background-color: black;
      border: none;
      border-radius: 3px;t
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="div-main" ondragover="allowDrop(event)" ondrop="handleDrop(e)" id="main"></div>
</body>
<script>
  function handleDrop(e) {
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
      dragElement(inputField);
      inputField.addEventListener('click', (e) => {
        enableResize(e.target);
      });
      // inputField.onclick = "enableResize(inputField)";
    }
    else if (selectedElement === "image-img") {

      // Create an button at the drop location
      const button = document.createElement('button');
      button.className = 'button-field';
      button.innerHTML = "Click me";
      button.style.position = 'absolute';
      button.style.display = 'block';
      button.style.left = dropX + 'px';
      button.style.top = dropY + 'px';
      document.body.querySelector(".div-main").appendChild(button);

      dragElement(button);
      button.addEventListener('click', (e) => {
        enableResize(e.target);
      });
    }
  }

  function allowDrop(event) {
    event.preventDefault(); // Necessary to allow dropping
  }
</script>

</html>`
    );
    iframeDoc.close();
  }

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', iframeConfig);
  }, []);

  return (
    <>
      <div className='div-simwindow'>
        <iframe className="iframe-simwindow" frameBorder="0"></iframe>
      </div>
    </>
  )
}

export default SimWindow