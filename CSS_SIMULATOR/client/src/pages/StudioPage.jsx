import {Navbar, ElementsPanel, SimWindow, PropertiesPanel} from '../components/DesignSection/Design.js'
import CodeEditor from '../components/DesignSection/CodeEditor.jsx'
import { ResizeProvider } from '../components/DesignSection/ResizeContext.jsx'
import LiveCodeEditing from '../components/DesignSection/LiveCodeEditing.jsx'

export default function StudioPage() {
    return (
        <>
            <Navbar />
            <div className="div-main">
                {/* <ResizeProvider> */}
                    <ElementsPanel />
                    <SimWindow />
                    <PropertiesPanel />
                    <CodeEditor viewmode={true} />
                {/* </ResizeProvider> */}
            </div>
        </>
    )
}