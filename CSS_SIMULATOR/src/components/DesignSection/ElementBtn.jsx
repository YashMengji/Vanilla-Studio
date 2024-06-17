

function ElementBtn({clickEvent, image, text}){
  return(
    <>
      <div className="div-element-btn" onClick={clickEvent}>
        <span className="div-element-btn-img material-symbols-outlined">
          {image}
        </span>
        <div className="div-element-btn-text">
          {text}
        </div>
      </div>
    </>
  )
}

export default ElementBtn