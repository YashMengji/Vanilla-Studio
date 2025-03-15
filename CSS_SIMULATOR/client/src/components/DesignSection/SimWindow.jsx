import { useEffect, useRef , useState} from 'react';
import './Css/SimWindow.css';
import {useResizeContext} from './ResizeContext';
// import { allowDrop, handleDrop , getReference} from './javascripts/iframeLogic';
// import { allowDrop, handleDrop, getReference } from './ElementCreation';
import { getReferenceForLayout } from './LayoutProperties';
import { initSections, getReferenceInitSections } from './javascripts/initSections';

function SimWindow() {
  const {handleReference, handleDrop, elementRef, resizableTemplateRef, editorHtml, setEditorHtml, showCodeEditor, pageContent, setPageContent} = useResizeContext()
  const simwindowRef = useRef(null);

  useEffect(() => {
    handleReference(simwindowRef,resizableTemplateRef);
    getReferenceForLayout(simwindowRef);
    // getReference(pageContent, setPageContent);
    getReferenceInitSections(simwindowRef);
    // simwindowRef.current.innerHTML = `<h1>Hello world!</h1>`
    initSections();
  }, []);

  useEffect(() => {
    if(showCodeEditor) {
      setEditorHtml(simwindowRef.current.outerHTML)
    }
  }, [showCodeEditor])

  

  return (
    <>
      <div 
        className='div-simwindow' 
        ref={simwindowRef} 
        onDragOver={(e, simwindowRef) => {e.preventDefault()}} 
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