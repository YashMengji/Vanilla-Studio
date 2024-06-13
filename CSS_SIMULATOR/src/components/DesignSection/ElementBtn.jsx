

function ElementBtn(props){
  return(
    <>
      <div className="div-element-btn">
        <span className="div-element-btn-img material-symbols-outlined">
          {props.image}
        </span>
        <div className="div-element-btn-text">
          {props.text}
        </div>
      </div>
    </>
  )
}

export default ElementBtn