import ElementBtn from "./ElementBtn"

function SectionElements(){
  return(
    <>
      <div className="div-section-elements">
        <ElementBtn image={"title"} text={"Title"} />
        <ElementBtn image={"image"} text={"Image"}/>
        <ElementBtn image={"segment"} text={"Paragraph"}/>
        <ElementBtn image={"videocam"} text={"Video"}/>
        <ElementBtn image={"link"} text={"Links"}/>
        <ElementBtn image={"box"} text={"Container"}/>
      </div>
    </>
  )
}

export default SectionElements