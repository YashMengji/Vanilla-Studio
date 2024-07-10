import { useEffect, useRef } from 'react';
import './Css/SimWindow.css';

function SimWindow() {
  const iframeRef = useRef(null);
  
  function iframeConfig() {
    let iframe = iframeRef.current;
    if (!iframe) return; // Ensure iframe is available

    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(
      `
<html>
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
      border-radius: 3px;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="div-main" ondragover="allowDrop(event)" ondrop="handleDrop(event)" id="main"></div>
</body>
<script src = '/javascripts/iframeLogic.js'>
</script>

</html>`
    );
    iframeDoc.close();
}
  useEffect(() => {
    iframeConfig();  
  }, []);

  return (
    <>
      <div className='div-simwindow'>
        <iframe className="iframe-simwindow" ref={iframeRef} ></iframe>
      </div>
    </>
  );
}

export default SimWindow;
