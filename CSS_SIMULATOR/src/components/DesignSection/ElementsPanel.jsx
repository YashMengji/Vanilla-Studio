import React, { useState } from 'react'
import './Css/ElementsPanel.css'
import LeftElementsPanel from './LeftElementsPanel'
import RightElementsPanel from './RightElementsPanel'
import SectionElements from './SectionElements'
import PageContent from './PageContent'
import PageStatus from './PageStatus'

function ElementsPanel() {
  const [showRightElementsPanel, setShowRightElementsPanel] = useState(true);
  const [showSectionElementsPanel, setShowSectionElementsPanel] = useState(false);
  const [showPageContentPanel, setShowPageContentPanel] = useState(false);
  const [showPageStatusPanel, setShowPageStatusPanel] = useState(false);
  function handleRightElementPanel() {
    setShowRightElementsPanel(!showRightElementsPanel);
    setShowSectionElementsPanel(false);
    setShowPageContentPanel(false);
    setShowPageStatusPanel(false);
  }

  function handleSectionElementsPanel() {
    setShowSectionElementsPanel(!showSectionElementsPanel);
    setShowRightElementsPanel(false);
    setShowPageContentPanel(false);
    setShowPageStatusPanel(false);
  }

  function handlePageContentPanel() {
    setShowPageContentPanel(!showPageContentPanel);
    setShowPageStatusPanel(false);
    setShowSectionElementsPanel(false);
    setShowRightElementsPanel(false);
  }

  function handlePageStatusPanel() {
    setShowPageStatusPanel(!showPageStatusPanel);
    setShowRightElementsPanel(false);
    setShowSectionElementsPanel(false);
    setShowPageContentPanel(false);
  }
  let propArr = [handleRightElementPanel, handleSectionElementsPanel, handlePageContentPanel,handlePageStatusPanel]
  return (
    <>
      <div className='div-elements-panel'>
        <LeftElementsPanel clickEvent = {propArr}/>
        <RightElementsPanel clickEvent = {propArr[0]} status = {showRightElementsPanel}/>
        <SectionElements clickEvent = {propArr[1]} status = {showSectionElementsPanel}/>
        <PageContent clickEvent = {propArr[2]} status = {showPageContentPanel}/>
        <PageStatus clickEvent = {propArr[3]} status = {showPageStatusPanel}/>
      </div>
    </>
  )
}

export default ElementsPanel