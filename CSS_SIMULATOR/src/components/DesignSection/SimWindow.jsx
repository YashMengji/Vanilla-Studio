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