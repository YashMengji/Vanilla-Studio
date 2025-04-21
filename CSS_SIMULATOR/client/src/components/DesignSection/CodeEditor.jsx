import React, { useMemo, useSyncExternalStore } from 'react'
import {useResizeContext} from './ResizeContext'
import { Editor } from '@monaco-editor/react';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

function CodeEditor({viewmode}) {
  
  const hasFormatted = useRef(false);
  const [editorHeight, setEditorHeight] = useState(220); // default height
  const isResizing = useRef(false);
  const {showCodeEditor, setShowCodeEditor, editorHtml, setEditorHtml, iframeHtml, setIframeHtml, editorCss, setEditorCss, isEditingCode, setIsEditingCode, setIsInitialized} = useResizeContext(); //Used to show the code editor

  const [fileName, setFileName] = useState("index.html"); //Used to switch between the files in the code editor
  const files = {
    "index.html": {
      name: "index.html",
      language: "html",
      value: editorHtml
        .replace(/\s*style="[^"]*"/g, '') //Remove the style attribute from the element's HTML
        .replace(/<img/g, '\n<img') // add new line before img tag
        .replace(/<a/g, '\n<a') // add new line before a tag
        .replace(/<video/g, '\n<video') // add new line before h1 tag
        .replace(/<div class="resizable" id="resizableTemplate"><div class="handle top-left"><\/div><div class="handle top-center"><\/div><div class="handle top-right"><\/div><div class="handle right-center"><\/div><div class="handle bottom-right"><\/div><div class="handle bottom-center"><\/div><div class="handle bottom-left"><\/div><div class="handle left-center"><\/div><\/div>/g, '') //Remove the resizable div from the HTML
        .replace(/<div class="div-simwindow">/, '') //Remove the div-simwindow from the HTML
        .replace(/<\/div>$/, '') //Remove the closing div tag from the HTML
        .replace(/contenteditable="true"/g, "") //Remove the content-editable attribute from the HTML
    },
    "style.css": {
      name: "style.css",
      language: "css",
      value: editorCss,
    }
  }; //Used for the files in the code editor
  const [file, setFile] = useState(files[fileName]); 
  const editorRef = useRef(null);
  
  useEffect(() => {
    setFile(files[fileName]);
    hasFormatted.current = false;
  }, [fileName, editorHtml]); //Used to switch between the files in the code editor
 
  // useEffect(() => {
  //   if (editorRef.current && viewmode && !hasFormatted.current) {
  //     setTimeout(() => {
  //       editorRef.current.getAction('editor.action.formatDocument').run();
  //       hasFormatted.current = true;
  //     }, 10);
  //   }
  //   console.log(editorHtml);
  // }, [editorHtml, fileName, viewmode]); //Used to format the code in the code editor


  useEffect(() => {
    const defaultEditorHeight = 220;
    if (showCodeEditor && editorHeight === 0) {
      setEditorHeight(defaultEditorHeight);
    }

    if(showCodeEditor) {
      setFileName("index.html");
    }
  }, [showCodeEditor]) //Displays html every time the code editor is opened

  const cssCode = useMemo(extractInlineCSS, [editorHtml]); //Used to extract the inline CSS from the HTML
  // setEditorCss((prev) => );
  useEffect(() => {
    if(viewmode) {
      setEditorCss(cssCode);
    }
  },[editorHtml, viewmode]);
  

  function extractInlineCSS() {
    // Create a temporary DOM element to parse the HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = editorHtml; // Assuming editorHtml is a state variable containing the HTML string
    const elements = tempDiv.querySelectorAll('[id]'); // Assuming elements have unique ids
    const styles = {};
    elements.forEach(el => {
      const id = `#${el.id}`; // Create the selector (id-based in this case)
      const inlineStyles = el.getAttribute('style'); // Get only the inline styles
      if (inlineStyles) {
        styles[id] = inlineStyles;
      }
    });
    // Generate and return the CSS code
    return generateCSS(styles);
  }

  // Function to convert the extracted styles to CSS code
  function generateCSS(styles) {
    let css = '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n';
    for (const selector in styles) {
      if(selector !== '#resizableTemplate') {
        css += `${selector} {\n  ${styles[selector].replace(/;\s*/g, ';\n  ').replace(/\n\s*$/, '')}\n}\n`;
      }
    }
    return css;
  }

  // used during navigating from codeEditor page to studio page 
  function applyCssAsInlineStyles(htmlString, cssString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Parse CSS
    const cssRules = cssString.match(/#[\w-]+\s*\{[^}]+\}/g); // only matches ID selectors

    if (cssRules) {
        cssRules.forEach(rule => {
            const selector = rule.match(/#([\w-]+)/)[1]; // extract id
            const styleBlock = rule.match(/\{([^}]+)\}/)[1]; // extract styles
            const element = doc.getElementById(selector);

            if (element) {
                // Get existing inline style (if any)
                const existingStyle = element.getAttribute('style') || '';
                // Combine old and new styles
                const updatedStyle = `${existingStyle} ${styleBlock}`.trim();
                element.setAttribute('style', updatedStyle);
            }
        });
    }

    return doc.body.innerHTML;
  }

  const handleMouseOver = () => {
    document.body.style.cursor = 'row-resize';
  }

  const handleMouserOut = () => {
    document.body.style.cursor = 'default';
  }

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = 'default';
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newHeight = window.innerHeight - e.clientY;
    // setEditorHeight(Math.max(newHeight, 150)); // set a minimum height
    if(newHeight < 50) {
        setEditorHeight(0);
        setShowCodeEditor(false);
    } else {
      setEditorHeight(newHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);


  function handleCodeUpdate() {
    if (isEditingCode) {
      // STEP 1: Convert CSS into inline styles
      const htmlWithInlineStyles = applyCssAsInlineStyles(iframeHtml, editorCss);
  
      // STEP 2: Update your ResizeContext or wherever the HTML is stored
      setEditorHtml(htmlWithInlineStyles);
    }

    // this prevents reinitialization of simwindow if moved back to studio page
    setIsInitialized(true);
    setIsEditingCode(!isEditingCode); // toggle view/edit
  }
  

  function handleEditorChange(value) {
    if (fileName === "index.html") {
      setIframeHtml(value); // Update the HTML content
    } else if(fileName === "style.css") {
      setEditorCss(value);
    }
  }


  return (
    <>
    {isEditingCode && 
      <div className="show-editor-toggle" onClick={() => setShowCodeEditor(true)}>
        Code
        <span className="material-symbols-outlined">
        keyboard_arrow_up
        </span>
      </div>
    }
      <div className={`div-code-editor ${showCodeEditor ? "" : "display-none"}`} 
        style={{
          height: editorHeight === 0 ? "0px" : `${editorHeight}px`,
        }}
      > 
      <div className="div-resize-handle" onMouseDown={handleMouseDown} onMouseOver={handleMouseOver} onMouseOut={handleMouserOut}></div>
      <div className='div-files-bar'> 
        <div>
          <div className="div-html-btn">
            <button className='html-btn' onClick={() => setFileName("index.html")}>index.html</button>
          </div>
          <div className="div-css-btn">
            <button className='css-btn' onClick={() => setFileName("style.css")}>style.css</button>
          </div>
        </div>

        <Link to={isEditingCode ? '/studio' : '/studio/codeeditor'}>
        <div onClick={handleCodeUpdate} className="div-edit-code-btn">
          {isEditingCode ? "Save" : "Edit Code"}
        </div>
        </Link>
        
      </div>
      <Editor
        height="100%"
        width="100%"
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        value={file.value}
        onMount={(editor, monaco) => editorRef.current = editor}
        onChange={viewmode ? undefined : handleEditorChange}
        options={
          { 
            scrollBeyondLastLine: true, 
            readOnly: viewmode 
          }
        }
      />
      </div>
    </>
      
    
  )
}

export default CodeEditor