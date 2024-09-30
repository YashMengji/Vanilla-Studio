import { useEffect, useRef , useContext} from 'react';
import './Css/SimWindow.css';
import {useResizeContext} from './ResizeContext';
import { allowDrop, handleDrop , getReference} from './javascripts/iframeLogic';
import { getReferenceForLayout } from './javascripts/layoutLogic';

function SimWindow() {

  const {handleReference, width, setWidth, height, setHeight , elementRef, resizableTemplateRef, xposition, yposition, setXPosition, setYPosition, resizeTemplate, borderWidth, setBorderWidth} = useResizeContext()
  const simwindowRef = useRef(null);

  useEffect(() => {
    handleReference(simwindowRef, resizableTemplateRef);
    getReferenceForLayout(simwindowRef);
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