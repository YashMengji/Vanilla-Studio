import ElementBtn from "./ElementBtn.jsx"

function RightElementsPanel(){
  return(
    <>
      <div className="div-right-elements">
        <ElementBtn image={"title"} text={"Title"} />
        <ElementBtn image={"image"} text={"Image"}/>
        <ElementBtn image={"segment"} text={"Paragraph"}/>
        <ElementBtn image={"videocam"} text={"Video"}/>
        <ElementBtn image={"link"} text={"Links"}/>
        <ElementBtn image={"box"} text={"Container"}/>
      </div>
    </>
  );
}

export default RightElementsPanel