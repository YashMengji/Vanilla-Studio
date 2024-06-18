import ElementBtn from "./ElementBtn"

function SectionElements({ clickEvent , status }){
  return(
    <>
    <div className={`${status ? 'div-section-element-expand' : 'div-section-elements'}`}>
      <div className="div-heading" onClick={clickEvent}>
        <h4>Sections</h4>
        <span className="material-symbols-outlined">
          arrow_back_ios
        </span>
      </div>
      <div className="div-section-elements-btns">
        <ElementBtn image={"dock_to_bottom"} text={"Header"} btnId = {"header"}/>
        <ElementBtn image={"list"} text={"Navbar"}/>
        <ElementBtn image={"dock"} text={"Main"}/>
        <ElementBtn image={"space_dashboard"} text={"Section"}/>
        <ElementBtn image={"dock_to_bottom"} text={"Footer"}/>
        <ElementBtn image={"newsmode"} text={"Article"}/>
        <ElementBtn image={"code"} text={"Code"}/>
        <ElementBtn image={"photo_frame"} text={"Figure"}/>
        <ElementBtn image={"padding"} text={"FigCaption"}/>
      </div>
    </div>
    </>
  )
}

export default SectionElements