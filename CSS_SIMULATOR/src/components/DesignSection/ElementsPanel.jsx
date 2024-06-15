import React from 'react'
import './Css/ElementsPanel.css'
import LeftElementsPanel from './LeftElementsPanel'
import RightElementsPanel from './RightElementsPanel'

function ElementsPanel() {
  return (
    <>
      <div className='div-elements-panel'>
        <LeftElementsPanel />
        <RightElementsPanel/>
      </div>
    </>
  )
}

export default ElementsPanel