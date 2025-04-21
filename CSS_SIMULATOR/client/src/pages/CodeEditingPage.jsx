import LiveCodeEditing from "../components/DesignSection/LiveCodeEditing";
import { ResizeProvider } from "../components/DesignSection/ResizeContext";
import "../components/DesignSection/Css/LiveCodeEditing.css";
import { useEffect } from "react";

export default function CodeEditingPage() {

    return (
        <div className="div-code-editing-page">
            <LiveCodeEditing/>
        </div>
        
    ) 
}