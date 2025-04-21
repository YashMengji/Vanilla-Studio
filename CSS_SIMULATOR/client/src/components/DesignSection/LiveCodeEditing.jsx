import CodeEditor from "./CodeEditor"
import "./Css/CodeEditor.css";
import "./Css/LiveCodeEditing.css";
import { useEffect, useRef } from "react";
import { useResizeContext } from "./ResizeContext";
import { useParams } from "react-router-dom";

export default function LiveCodeEditing() {
    const {projectId} = useParams();
    const iframeRef = useRef(null);
    const {editorHtml, setEditorHtml, editorCss, setShowCodeEditor, simwindowRef, iframeHtml, setIframeHtml, iframeCss, setIframeCss} = useResizeContext();

    function removeInlineStyles(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
    
        // Select all elements with a style attribute
        doc.querySelectorAll('[style]').forEach(el => {
            el.removeAttribute('style');
        });
    
        return doc.body.innerHTML;
    }

    useEffect(() => {
        setShowCodeEditor(true);

        // remove all inline style attributes when this component renders for the first time 
        // reason : because here style.css is getting applied in style tag of iframe
        let htmlWithoutInlineStyle = removeInlineStyles(editorHtml);
        setIframeHtml(htmlWithoutInlineStyle);

    }, []);

    useEffect(() => {
        iframeRef.current.contentDocument.body.innerHTML = iframeHtml + "<style>" + editorCss + "</style>";
    }, [iframeHtml, editorCss]);

    return (
        <>
            <iframe ref={iframeRef} className="live-preview-screen"></iframe>
            <CodeEditor viewmode={false} projectId={projectId}/>    
        </>
    )
}