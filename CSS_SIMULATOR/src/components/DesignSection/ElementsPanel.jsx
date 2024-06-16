import React from 'react'
import './Css/ElementsPanel.css'
import LeftElementsPanel from './LeftElementsPanel'
import RightElementsPanel from './RightElementsPanel'
import SectionElements from './SectionElements'
import PageContent from './PageContent'

function ElementsPanel() {
  return (
    <>
      <div className='div-elements-panel'>
        <LeftElementsPanel />
        {/* <RightElementsPanel/> */}
        {/* <SectionElements /> */}
        <PageContent />
      </div>
    </>
  )
}

export default ElementsPanel