import {Navbar, ElementsPanel, SimWindow, PropertiesPanel} from '../components/DesignSection/Design.js'
import CodeEditor from '../components/DesignSection/CodeEditor.jsx'
import { ResizeProvider } from '../components/DesignSection/ResizeContext.jsx'
import LiveCodeEditing from '../components/DesignSection/LiveCodeEditing.jsx'
import { useParams } from 'react-router-dom'

export default function StudioPage() {
    const {projectId} = useParams();
    return (
        <>
            <Navbar />
            <div className="div-main">
                {/* <ResizeProvider> */}
                    <ElementsPanel />
                    <SimWindow projectId={projectId}/>
                    <PropertiesPanel />
                    <CodeEditor viewmode={true} projectId={projectId} />
                {/* </ResizeProvider> */}
            </div>
        </>
    )
}