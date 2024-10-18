import React from 'react'
import {useResizeContext} from './ResizeContext'
import { Editor } from '@monaco-editor/react';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

function CodeEditor() {
  
  const {showCodeEditor, editorHtml} = useResizeContext();
  const [fileName, setFileName] = useState("index.html");
  const files = {
    "index.html": {
      name: "index.html",
      language: "html",
      value: "<h1>Hello, world!</h1>"
    },
    "style.css": {
      name: "style.css",
      language: "css",
      value: "h1 { color: red; }"
    }
  };
  const [file, setFile] = useState(files[fileName]);
  const editorRef = useRef(null);
  
  useEffect(() => {
    setFile(files[fileName]);
  }, [fileName, editorHtml]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument').run();
    }
  }, [editorHtml]);

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
        path="index.html"
        defaultLanguage="html"
        value={editorHtml}
        onMount={(editor) => (editorRef.current = editor)}
      />
    </div>
  )
}

export default CodeEditor