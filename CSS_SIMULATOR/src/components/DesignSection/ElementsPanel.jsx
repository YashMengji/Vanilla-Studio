import React, { useState } from 'react'
import './Css/ElementsPanel.css'
import LeftElementsPanel from './LeftElementsPanel'
import RightElementsPanel from './RightElementsPanel'
import SectionElements from './SectionElements'
import PageContent from './PageContent'

function ElementsPanel() {
  const [showRightElementsPanel, setShowRightElementsPanel] = useState(false);
  const [showSectionElementsPanel, setShowSectionElementsPanel] = useState(false);
  const [showPageContentPanel, setShowPageContentPanel] = useState(false);
  const [showPageStatusPanel, setShowPageStatusPanel] = useState(false);
  function handleRightElementPanel() {
    setShowRightElementsPanel(!showRightElementsPanel);
  }

  function handleSectionElementsPanel() {
    setShowSectionElementsPanel(!showSectionElementsPanel);
  }

  function handlePageContentPanel() {
    setShowPageContentPanel(!showPageContentPanel);
  }

  function handlePageStatusPanel() {
    setShowPageStatusPanel(!showPageStatusPanel);
  }
  let propArr = [handleRightElementPanel, handleSectionElementsPanel, handlePageContentPanel]
  return (
    <>
      <div className='div-elements-panel'>
        <LeftElementsPanel clickEvent = {propArr}/>
        <RightElementsPanel status = {showRightElementsPanel}/>
        <SectionElements status = {showSectionElementsPanel}/>
        <PageContent status = {showPageContentPanel}/>
        {/*<PageStatus />*/}
      </div>
    </>
  )
}

export default ElementsPanel