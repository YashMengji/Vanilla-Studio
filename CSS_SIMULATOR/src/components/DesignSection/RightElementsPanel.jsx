import { useState } from "react";
import ElementBtn from "./ElementBtn.jsx"


function RightElementsPanel({ clickEvent , status }){ 
  
  return(
    <>
    <div className ={`${status ? 'div-right-elements-expand' : 'div-right-elements'}`}>
      <div className="div-heading" onClick={clickEvent}>
        <h4>Add Elements</h4>
        <span className="material-symbols-outlined">
          arrow_back_ios
        </span>
      </div>
      <div className="div-quick-add-elements">
        <ElementBtn clickEvent = {(e) => console.log(e.target)} image={"title"} text={"Title"} />
        <ElementBtn image={"image"} text={"Image"}/>
        <ElementBtn image={"segment"} text={"Paragraph"}/>
        <ElementBtn image={"videocam"} text={"Video"}/>
        <ElementBtn image={"link"} text={"Links"}/>
        <ElementBtn image={"box"} text={"Container"}/>
      </div>
    </div>
    </>
  );
}

export default RightElementsPanel