import { useEffect, useRef , useContext} from 'react';
import './Css/SimWindow.css';
import {useResizeContext} from './ResizeContext';
import { allowDrop, handleDrop , getReference} from './javascripts/iframeLogic';
import { getReferenceForLayout } from './LayoutProperties';
import { initSections, getReferenceInitSections } from './javascripts/initSections';

function SimWindow() {

  const {handleReference, elementRef, resizableTemplateRef, editorHtml, setEditorHtml, showCodeEditor} = useResizeContext()
  const simwindowRef = useRef(null);

  useEffect(() => {
    handleReference(simwindowRef,resizableTemplateRef);
    getReferenceForLayout(simwindowRef);
    getReference(simwindowRef);
    getReferenceInitSections(simwindowRef);
    initSections();
    console.log(simwindowRef.current.outerHTML.replace(/<div class="resizable" id="resizableTemplate" style="display: none;"><div class="handle top-left"><\/div><div class="handle top-center"><\/div><div class="handle top-right"><\/div><div class="handle right-center"><\/div><div class="handle bottom-right"><\/div><div class="handle bottom-center"><\/div><div class="handle bottom-left"><\/div><div class="handle left-center"><\/div><\/div>/g, '').replace(/<div class="div-simwindow">/, '').replace(/<\/div>$/, ''));
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