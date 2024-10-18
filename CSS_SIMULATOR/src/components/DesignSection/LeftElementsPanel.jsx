import React from 'react'
import {useResizeContext} from './ResizeContext.jsx'

function LeftElementsPanel({clickEvent}) {

  const {setShowCodeEditor} = useResizeContext()

  return (
    <>
        <div className='div-left-elements'>
          <div className="div-left-elements-icons">
            <span onClick={clickEvent[0]} className="material-symbols-outlined left-elements-icons">add_circle</span>
            <span onClick={clickEvent[1]} className="material-symbols-outlined left-elements-icons">layers</span>
            <span onClick={clickEvent[2]} className="material-symbols-outlined left-elements-icons">find_in_page</span>
            <span onClick={clickEvent[3]} className="material-symbols-outlined left-elements-icons">stack</span>
            <span className="material-symbols-outlined left-elements-icons" onClick={() => setShowCodeEditor(c => !c)}>
              code_blocks
            </span>
          </div>
        </div>
    </>
  )
}

export default LeftElementsPanel