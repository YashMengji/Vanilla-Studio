import React from 'react'

function LeftElementsPanel({clickEvent}) {
  return (
    <>
        <div className='div-left-elements'>
          <div className="div-left-elements-icons">
            <span onClick={clickEvent[0]} className="material-symbols-outlined left-elements-icons">add_circle</span>
            <span onClick={clickEvent[1]} className="material-symbols-outlined left-elements-icons">layers</span>
            <span onClick={clickEvent[2]} className="material-symbols-outlined left-elements-icons">find_in_page</span>
            <span className="material-symbols-outlined left-elements-icons">stack</span>
          </div>
        </div>
    </>
  )
}

export default LeftElementsPanel