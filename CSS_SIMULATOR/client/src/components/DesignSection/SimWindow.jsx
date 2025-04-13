import { useEffect, useRef , useState} from 'react';
import './Css/SimWindow.css';
import {useResizeContext} from './ResizeContext';
import { getReferenceForLayout } from './LayoutProperties';
import { initSections, getReferenceInitSections } from './javascripts/initSections';

function SimWindow() {
  const {simwindowRef, isInitialized, setIsInitialized, handleReference, handleDrop, elementRef, resizableTemplateRef, editorHtml, setEditorHtml, showCodeEditor, pageContent, setPageContent, isEditingCode, setIsEditingCode} = useResizeContext()

  

  useEffect(() => {
    setEditorHtml(simwindowRef.current.innerHTML);
  }, []);

  // this is initialized only once 
  // when moving from code editor page to studio page this will not be executed. 
  // instead the else part will be executed 
  useEffect(() => {
    if (!isInitialized) {
      handleReference();
      getReferenceForLayout(simwindowRef);
      getReferenceInitSections(simwindowRef);
      initSections();
      setEditorHtml(simwindowRef.current.innerHTML);
      setIsInitialized(true);
    } else {
      simwindowRef.current.innerHTML = editorHtml;
    }
  }, [isInitialized]);

  useEffect(() => {
    if(showCodeEditor) {
      setEditorHtml(simwindowRef.current.innerHTML);
    }
  }, [showCodeEditor, isEditingCode]);
    

  return (
    <>
      <div 
        className='div-simwindow' 
        ref={simwindowRef} 
        onDragOver={(e, simwindowRef) => {e.preventDefault()}} 
        onDrop={(e, simwindowRef) => {handleDrop(e, simwindowRef)}}
      >
        {/* <div 
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
        </div>                         */}
        {/*<iframe className="iframe-simwindow" ref={iframeRef} ></iframe>*/}
      </div>
    </>
  );
}

export default SimWindow;