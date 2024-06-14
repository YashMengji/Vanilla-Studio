import ElementBtn from "./ElementBtn.jsx"

function ElementsPanel(){
  return(
    <>
      <div className="div-elements-panel">
        <ElementBtn image={"title"} text={"Title"}/>
        <ElementBtn image={"image"} text={"Image"}/>
        <ElementBtn image={"segment"} text={"Paragraph"}/>
        <ElementBtn image={"videocam"} text={"Video"}/>
        <ElementBtn image={"link"} text={"Links"}/>
        <ElementBtn image={"box"} text={"Container"}/>

      </div>
    </>
  );
}

export default ElementsPanel