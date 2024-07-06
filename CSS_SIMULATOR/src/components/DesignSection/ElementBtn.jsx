

function ElementBtn({ image, text, setDataProp }){
  return(
    <>
      <div className="div-element-btn" onDragStart={setDataProp} draggable="true">
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