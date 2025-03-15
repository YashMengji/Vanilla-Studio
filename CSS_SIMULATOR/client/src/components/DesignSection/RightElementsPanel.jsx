import { useState, useRef } from "react";
import ElementBtn from "./ElementBtn.jsx"


function RightElementsPanel({ clickEvent , status }){ 
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const paragraphRef = useRef(null);
  const videoRef = useRef(null);
  const linkRef = useRef(null);
  const containerRef = useRef(null);

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
        <ElementBtn setDataProp = {(e) => {e.dataTransfer.setData('source', 'title-img');}}  onClick = {()=> console.log('hi')} image={"title"} text={"Title"} />
        <ElementBtn setDataProp={(e) => {e.dataTransfer.setData('source', 'image-img');}} image={"image"} text={"Image"}/>
        <ElementBtn setDataProp={(e) => {e.dataTransfer.setData('source', 'para-img');}}   image={"segment"} text={"Paragraph"}/>
        <ElementBtn setDataProp={(e) => {e.dataTransfer.setData('source', 'button-img');}}  image={"switches"} text={"Button"}/>
        <ElementBtn setDataProp={(e) => {e.dataTransfer.setData('source', 'link-img');}}   image={"link"} text={"Links"}/>
        <ElementBtn setDataProp={(e) => {e.dataTransfer.setData('source', 'container-img');}}  image={"box"} text={"Container"}/>
      </div>
    </div>
    </>
  );
}

export default RightElementsPanel