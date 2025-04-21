import { useEffect, useRef , useState} from 'react';
import './Css/SimWindow.css';
import {useResizeContext} from './ResizeContext';
import { getReferenceForLayout } from './LayoutProperties';
import { initSections, getReferenceInitSections } from './javascripts/initSections';
import {useParams} from 'react-router-dom';
import { saveChanges } from '../../services/projects';

function SimWindow({projectId}) {
  const {simwindowRef, isInitialized, setIsInitialized, handleReference, handleDrop, elementRef, resizableTemplateRef, editorHtml, setEditorHtml, editorCss, showCodeEditor, pageContent, setPageContent, isEditingCode, setIsEditingCode, simwindowHtml, setSimwindowHtml} = useResizeContext();

  useEffect(() => {
    setEditorHtml(simwindowRef.current.innerHTML);
    handleReference();
  }, []);

  // this is initialized only once 
  // when moving from code editor page to studio page this will not be executed. 
  // instead the else part will be executed 
  useEffect(() => {
    if (!isInitialized) {
      
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


  // tracking the simwindow's innerHTML code 
  useEffect(() => {
    // this native browser API takes a callback which is used to observe the node 
    const observer = new MutationObserver((mutationsList, observer) => {
      const updatedHTML = simwindowRef.current.innerHTML;
      // update the changes in this state and later save it using autosave 
      setEditorHtml(updatedHTML); // This will trigger the autosave useEffect
    });
  
    // observer starts tracking the give dom node 
    // extra options is to track different parts of that node 
    if (simwindowRef.current) {
      observer.observe(simwindowRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
  
    return () => {
      observer.disconnect(); // Clean up
    };
  }, []);
  

  // autosave functionality 
  useEffect(() => {
    if (!editorHtml) return;

    const timeout = setTimeout(async () => {
      try {
        await saveChanges(projectId, { HTML: editorHtml }); // 👈 Send HTML to backend
        console.log("Auto-saved project HTML");
      } catch (err) {
        console.error("Auto-save error:", err);
      }
    }, 2000); // Save 2 seconds after last change

    return () => clearTimeout(timeout); // Reset debounce timer
  }, [editorHtml]);

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