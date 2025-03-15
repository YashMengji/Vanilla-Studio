import React, { Children } from 'react'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { useResizeContext } from './ResizeContext';

function PageContent({ clickEvent , status }) {

  const {pageContent, setPageContent} = useResizeContext();
  return (
    <>
        <div className={`${status ? 'div-page-content-expand' : 'div-page-content'}`}>
          <div className="div-heading div-head-page" onClick={clickEvent}>
            <h4>Page contents</h4>
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
          </div>
          <div className="div-page-indicator">
            <h5>Page (page name)</h5>
          </div>
          <div className="div-page-hierarchy">
            <RichTreeView items = {pageContent} />
          </div>
        </div>
        
    </>
    
  )
}

export default PageContent