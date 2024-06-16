import React from 'react'
import './Css/ElementsPanel.css'
import LeftElementsPanel from './LeftElementsPanel'
import RightElementsPanel from './RightElementsPanel'
import SectionElements from './SectionElements'

function ElementsPanel() {
  return (
    <>
      <div className='div-elements-panel'>
        <LeftElementsPanel />
        <SectionElements />
        {/* <RightElementsPanel/> */}
      </div>
    </>
  )
}

export default ElementsPanel