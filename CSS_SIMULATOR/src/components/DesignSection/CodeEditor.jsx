import React from 'react'
import {useResizeContext} from './ResizeContext'
import { Editor } from '@monaco-editor/react';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

function CodeEditor() {
  
  const {showCodeEditor, editorHtml} = useResizeContext(); //Used to show the code editor
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
    },
    "style.css": {
      name: "style.css",
      language: "css",
      value: "h1 { color: red; }"
    }
  }; //Used for the files in the code editor
  const [file, setFile] = useState(files[fileName]); 
  const editorRef = useRef(null);
  
  useEffect(() => {
    setFile(files[fileName]);
  }, [fileName, editorHtml]); //Used to switch between the files in the code editor

  useEffect(() => {
    if (editorRef.current) {
      setTimeout(() => {
        editorRef.current.getAction('editor.action.formatDocument').run();
      }, 1);
    }
  }, [editorHtml, fileName]); //Used to format the code in the code editor

  function extractInlineCSS() {
    const elements = editorHtml.querySelectorAll('[id]'); // Assuming elements have unique ids
    const styles = {};
  
    elements.forEach(el => {
      const id = `#${el.id}`; // Create the selector (id-based in this case)
      const inlineStyles = el.getAttribute('style'); // Get only the inline styles
      if (inlineStyles) {
        styles[id] = inlineStyles;
      }
    });
  
    // Generate and print the CSS code
    const cssCode = generateCSS(styles);
    console.log(cssCode);
  }

  // Function to convert the extracted styles to CSS code
  function generateCSS(styles) {
    let css = '';
    for (const selector in styles) {
      css += `${selector} {\n  ${styles[selector].replace(/;\s*/g, ';\n  ')}\n}\n`;
    }
    return css;
  }

  return (
    <div className={`div-code-editor ${showCodeEditor ? "" : "display-none"}`}>
      <div>
        CodeEditor
      </div>
      <div className='div-files-bar'> 
        <div className="div-html-btn">
          <button className='html-btn' onClick={() => setFileName("index.html")}>index.html</button>
        </div>
        <div className="div-css-btn">
          <button className='css-btn' onClick={() => setFileName("style.css")}>style.css</button>
        </div>
      </div>
      <Editor
        height="100%"
        width="100%"
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        value={file.value}
        onMount={(editor) => (editorRef.current = editor)}
      />
    </div>
  )
}

export default CodeEditor