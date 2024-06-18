import React from 'react'

function PageStatus({ clickEvent , status }) {
  return (
    <>
        <div className={`${status ? 'div-page-status-expand' : 'div-page-status'}`}>
            <div className="div-heading div-head-page" onClick={clickEvent}>
                <h4>Page Status</h4>
                <span className="material-symbols-outlined">
                arrow_back_ios
                </span>
            </div>
            <div className="div-input-page-name">
                <input type="text" className='page-name-input' placeholder='Page name'/>
                <span className="material-symbols-outlined create-page-icon">
                    add_box
                </span>
            </div>
            <div className="div-page-indicator">
                <h5>Home</h5>
            </div>
        </div>
    </>
  )
}

export default PageStatus