import React from 'react'

function PageContent({status}) {
  return (
    <>
        <div className={`${status ? 'div-page-content-expand' : 'div-page-content'}`}>
          <div className="div-heading div-head-page">
            <h4>Page contents</h4>
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
          </div>
          <div className="div-page-indicator">
            <h5>Page (page name)</h5>
          </div>
        </div>
        
    </>
    
  )
}

export default PageContent