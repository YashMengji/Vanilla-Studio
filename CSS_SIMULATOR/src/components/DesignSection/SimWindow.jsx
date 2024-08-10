import { useEffect, useRef } from 'react';
import './Css/SimWindow.css';
import { allowDrop, handleDrop , getReference} from './javascripts/iframeLogic';
import { handleReference } from './javascripts/dragResize';

function SimWindow() {
  const iframeRef = useRef(null);
  const simwindowRef = useRef(null);
  const resizableTemplateRef = useRef(null);
  useEffect(() => {
    handleReference(simwindowRef, resizableTemplateRef);
    getReference(simwindowRef);
  }, []);

//   function iframeConfig() {
//     let iframe = iframeRef.current;

//     let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//     iframeDoc.open();
//     iframeDoc.write(
//       `
// <html>
//   <head>
//     <style>
//       * {
//         \nmargin: 0;
//         \npadding: 0;
//         \nbox-sizing: border-box\n
//       }

//       \n.div-main {
//         \nposition: relative;
//         \nbackground-color: white;
//         \noverflow-x: auto;
//         \nheight: 100vh;
//       }

      // .resizable {
      //       outline: 2px solid rgb(0, 200, 255);
      //       width: 200px;
      //       height: 200px;
      //       background: transparent;
      //       cursor: move;
      //       position: absolute;
      // }
      // .handle {
      //   width: 10px;
      //   height: 10px;
      //   border-radius : 50px;
      //   background-color: rgb(0, 128, 255);
      //   position: absolute;
      //   cursor: pointer;
      // }
      // .handle.top-left {
      //       left: -5px;
      //       top: -5px;
      //       cursor: nw-resize;
      //   }

      //   .handle.top-center {
      //       top: -5px;
      //       left: 50%;
      //       transform: translateX(-50%);
      //       cursor: n-resize;
      //   }

      //   .handle.top-right {
      //       right: -5px;
      //       top: -5px;
      //       cursor: ne-resize;
      //   }

      //   .handle.right-center {
      //       right: -5px;
      //       top: 50%;
      //       transform: translateY(-50%);
      //       cursor: e-resize;
      //   }

      //   .handle.bottom-right {
      //       right: -5px;
      //       bottom: -5px;
      //       cursor: se-resize;
      //   }

      //   .handle.bottom-center {
      //       bottom: -5px;
      //       left: 50%;
      //       transform: translateX(-50%);
      //       cursor: s-resize;
      //   }

      //   .handle.bottom-left {
      //       left: -5px;
      //       bottom: -5px;
      //       cursor: sw-resize;
      //   }

      //   .handle.left-center {
      //       left: -5px;
      //       top: 50%;
      //       transform: translateY(-50%);
      //       cursor: w-resize;
      //   }
//     </style>
//   </head>

//   <body>
//     <div class="resizable" id="resizableTemplate" style="display: none;">
//         <div class="handle top-left"></div>
//         <div class="handle top-center"></div>
//         <div class="handle top-right"></div>
//         <div class="handle right-center"></div>
//         <div class="handle bottom-right"></div>
//         <div class="handle bottom-center"></div>
//         <div class="handle bottom-left"></div>
//         <div class="handle left-center"></div>
//     </div>
//     <div style="user-select:none;" class="div-main" ondragover="allowDrop(event)" ondrop="handleDrop(event)" id="main"></div>
//   </body>
//   <script src = '/javascripts/iframeLogic.js'></script>
//   <script src = '/javascripts/dragResize.js'></script>
// </html>`
//     );
//     iframeDoc.close();
// }
  // useEffect(() => {
  //   iframeConfig();  
  // }, []);

  return (
    <>
      <div 
      className='div-simwindow' 
      ref={simwindowRef} 
      onDragOver={(e, simwindowRef) => {allowDrop(e, simwindowRef)}} 
      onDrop={(e, simwindowRef) => {handleDrop(e, simwindowRef)}}
      >
        <div 
        className="resizable" 
        id="resizableTemplate" 
        style={{display: 'none'}} 
        ref={resizableTemplateRef}>
          <div className="handle top-left"></div>
          <div className="handle top-center"></div>
          <div className="handle top-right"></div>
          <div className="handle right-center"></div>
          <div className="handle bottom-right"></div>
          <div className="handle bottom-center"></div>
          <div className="handle bottom-left"></div>
          <div className="handle left-center"></div>
        </div>
        {/*<iframe className="iframe-simwindow" ref={iframeRef} ></iframe>*/}
      </div>
    </>
  );
}

export default SimWindow;