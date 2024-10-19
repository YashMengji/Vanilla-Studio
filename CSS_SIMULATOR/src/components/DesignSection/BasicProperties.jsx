import React from 'react'
import {useState, useEffect, useContext} from "react"
import {useResizeContext} from './ResizeContext';


function BasicProperties() {


  const {
    width,
    setWidth,
    height,
    setHeight,
    elementRef,
    resizableTemplateRef,
    xposition,
    yposition,
    setXPosition,
    setYPosition,
    resizeTemplate,
    borderWidth,
    setBorderWidth,
    borderRadius,
    setBorderRadius,
    isTextElement,
    setIsTextElement,
  } = useResizeContext();

  const [borderOpacity, setBorderOpacity] = useState(1)
  const [borderColor, setBorderColor] = useState("#000000") // Set default color to black
  const [backgroundColor, setBackgroundColor] = useState('#f0f8ff');
  const [fontColor, setFontColor] = useState('#000000');

  const handleXPosition = (e) => { // used in onChange of input 
    const newXPosition = e.target.value;
    setXPosition(newXPosition);
    updatePosition(newXPosition, yposition); // Update the element's left
  };
  const handleYPosition = (e) => { // used in onChange of input 
    const newYPosition = e.target.value;
    setYPosition(newYPosition);
    updatePosition(xposition, newYPosition); // Update the element's top
  };
  const handleWidthChange = (e) => { // used in onChange of input 
    const newWidth = e.target.value;
    setWidth(newWidth);
    updateElementDimensions(newWidth, height); // Update the element's width
  };
  const handleHeightChange = (e) => { // used in onChange of input 
    const newHeight = e.target.value; 
    setHeight(newHeight);
    updateElementDimensions(width, newHeight); // Update the element's height
  };
  const handleBroderWidthChange = (e) => { // used in onChange of input
    const newBorderWidth = e.target.value;
    setBorderWidth(newBorderWidth);
    updateElementProperty("borderWidth", borderWidth); // Update the element's border width
  };
  const handleBorderRadiusChange = (e) => { // used in onChange of input
    const newBorderRadius = e.target.value;
    setBorderRadius(newBorderRadius);
    updateElementProperty("borderRadius", borderRadius); // Update the element's border radius
  };
  const handleBorderColorChange = (e) => { // used in onChange of input
    const newBorderColor = e.target.value;
    setBorderColor(newBorderColor);
    updateElementProperty("borderColor", borderColor); // Update the element's border color
  }
  const handleBackgroundColorChange = (e) => {
    const newBackgroundColor = e.target.value;
    setBackgroundColor(newBackgroundColor);
    updateElementProperty("backgroundColor", backgroundColor); 
  }
  const handleFontColorChange = (e) => {
    const newFontColor = e.target.value;
    setFontColor(newFontColor);
    updateElementProperty("color", fontColor);
  }

  // Function to update element dimensions
  const updateElementDimensions = (newWidth, newHeight) => {
    if (elementRef.current && resizeTemplate) {
      elementRef.current.style.width = `${newWidth}px`;
      elementRef.current.style.height = `${newHeight}px`;
      resizeTemplate.current.style.width = `${newWidth}px`;
      resizeTemplate.current.style.height = `${newHeight}px`;
    }
  };
  const updatePosition = (newXPosition, newYPosition) => {
    if (elementRef.current && resizeTemplate) {
      elementRef.current.style.left = `${newXPosition}px`;
      elementRef.current.style.top = `${newYPosition}px`;
      resizeTemplate.current.style.left = `${newXPosition}px`;
      resizeTemplate.current.style.top = `${newYPosition}px`;
    }
  };
  const updateElementProperty = (property, value) => {
    if (elementRef.current && resizeTemplate) {
      if(property === "borderWidth") {
        elementRef.current.style[property] = `${value}px`;
      }
      else if(property === "borderColor") {
        elementRef.current.style[property] = `${value}`;
      }
      else if(property === "borderRadius") {
        elementRef.current.style[property] = `${value}px`;
      }
      else if(property === "backgroundColor") {
        elementRef.current.style[property] = `${value}`;
      }
      else if(property === "color") {
        elementRef.current.style[property] = `${value}`;
      }
      // console.log(elementRef.current.style.property);
    }
  };

  // Functions to change alignment of elements
  function changeHorizontalPos(position) {
    if (elementRef.current && resizeTemplate) {
      if (position === "flex-start") {
        elementRef.current.style.left = 0;
        elementRef.current.style.right = "auto";
        resizeTemplate.current.style.left = 0;
        resizeTemplate.current.style.right = "auto";
      } else if (position === "flex-end") {
        elementRef.current.style.right = 0;
        elementRef.current.style.left = "auto";
        resizeTemplate.current.style.right = 0;
        resizeTemplate.current.style.left = "auto";
      } else if (position === "center") {
        const parentWidth = elementRef.current.parentElement.offsetWidth;
        const elementWidth = elementRef.current.offsetWidth;
        const centerPosition = (parentWidth - elementWidth) / 2;
        elementRef.current.style.left = `${centerPosition}px`;
        resizeTemplate.current.style.left = `${centerPosition}px`;
      }
      // if(resizeTemplate.current.style.left==="auto") {
      //   setXPosition(0);
      setXPosition(Number(resizeTemplate.current.offsetLeft));
      console.log(resizeTemplate.current.style.left); 
    }
  }
  function changeVerticalPos(position) {
    if (elementRef.current && resizeTemplate) {
      if (position === "flex-start") {
        elementRef.current.style.top = 0;
        elementRef.current.style.bottom = "auto";
        resizeTemplate.current.style.top = 0;
        resizeTemplate.current.style.bottom = "auto";
      } else if (position === "flex-end") {
        elementRef.current.style.bottom = 0;
        elementRef.current.style.top = "auto";
        resizeTemplate.current.style.bottom = 0;
        resizeTemplate.current.style.top = "auto";
      } else if (position === "center") {
        const parentHeight = elementRef.current.parentElement.offsetHeight;
        const elementHeight = elementRef.current.offsetHeight;
        const centerPosition = (parentHeight - elementHeight) / 2;
        elementRef.current.style.top = `${centerPosition}px`;
        resizeTemplate.current.style.top = `${centerPosition}px`;
      }
      setYPosition(Number(resizeTemplate.current.offsetTop));
    }
  }

  useEffect(() => {
    updateElementDimensions(width, height); // Initialize with current values
    updatePosition(xposition, yposition);
  }, [width, height, xposition, yposition]);

  
  return (
    <div className="div-basic-properties-panel">
      <div className="div-alignment-section">
        <span className="alignment-icons material-symbols-outlined" onClick={() => {changeHorizontalPos("flex-start")}}  >
          align_justify_flex_start
        </span>
        <span className="alignment-icons material-symbols-outlined" onClick={() => {changeHorizontalPos("center")}}  >
          align_justify_center
        </span>
        <span className="alignment-icons material-symbols-outlined" onClick={() => {changeHorizontalPos("flex-end")}}  >
        align_justify_flex_end
        </span>
        <span className="alignment-icons material-symbols-outlined" onClick={() => {changeVerticalPos("flex-start")}} >
        align_flex_start
        </span>
        <span className="alignment-icons material-symbols-outlined" onClick={() => {changeVerticalPos("center")}} >
        align_flex_center
        </span>
        <span className="alignment-icons material-symbols-outlined" onClick={() => {changeVerticalPos("flex-end")}} >
        align_flex_end
        </span>
      </div>
      <div className="div-break-between "></div>
      <div className="div-dimension-section">
        <div className="div-dimension-heading">
          Size
        </div>
        <div className="div-edit-dimension">
          <div className="div-xy-dim">
            <div className="div-x-dim">
              <div className="div-x-dim-text">
                X 
              </div>
              <div className="div-x-dim-input">
                <input 
                type="number" 
                className="x-dim-input" 
                onChange={(e) => handleXPosition(e)}
                value={xposition}
                />
                <div className="div-px-text">px*</div>
              </div>
            </div>
            <div className="div-y-dim">
              <div className="div-y-dim-text">
                Y 
              </div> 
              <div className="div-y-dim-input">
                <input 
                type="number" 
                className="y-dim-input" 
                onChange={(e) => handleYPosition(e)}
                value={yposition}
                />
                <div className="div-px-text">px*</div>
              </div>
            </div>
          </div>
          <div className="div-wh-dim">
            <div className="div-w-dim">
              <div className="div-w-dim-text" onClick={()=>{console.log(widthInput)}}>
                W 
              </div>
              <div className="div-w-dim-input" >
                <input 
                type="number" 
                className="w-dim-input" 
                onChange={(e) => handleWidthChange(e)}
                value={width}
                />
                <div className="div-px-text">px*</div>
              </div>
            </div>
            <div className="div-h-dim">
              <div className="div-h-dim-text">
                H 
              </div> 
              <div className="div-h-dim-input">
                <input 
                type="number" 
                className="h-dim-input" 
                onChange={(e) => handleHeightChange(e)}
                value={height}
                />
                <div className="div-px-text">px*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-break-between border"></div>
      <div className="div-border-section">
        <div className="div-border-heading">
          Border
        </div>
        <div className="div-border-color">
          <div className="div-border-color-heading">
            Color and Radius
          </div>
          <div className="div-border-color-edit">
            <input type="color" className='border-color-input-color' value={borderColor} onChange={handleBorderColorChange} />
            <input type="range" min="0" step="1" onChange={handleBorderRadiusChange} className='border-radius-range' value={borderRadius} />
            <div className="div-border-color-input">
              <input type="number" className='border-color-input' min="0" step="1" value={borderRadius} onChange={handleBorderRadiusChange} />
              <div className="div-px-text">
                px
              </div>
            </div>
          </div>
        </div>
        <div className="div-border-width">
          <div className="div-border-width-heading">
            Width(px)
          </div>
          <div className="div-border-width-edit">
            <input type="range" min="0" max="14" step="1" value={borderWidth} onChange={handleBroderWidthChange} className="border-width-range"/>
            <div className="div-border-width-input">
              <input type="number" className='border-width-input' min="0" max="14" step="1" value={borderWidth} onChange={handleBroderWidthChange} />
              <div className="div-px-text">
                px
              </div>
            </div>
          </div>
        </div>
        <div className="div-background-color-edit">
          <div className="div-background-color-heading">
            Background Color
          </div>
          <input type="color" className='background-color-input' value={backgroundColor} onChange={handleBackgroundColorChange} />
        </div>
      </div><hr />
      {isTextElement && (
        <div className="div-typography-section">
          <span>Text Properties</span><br /><br />
          <div className="div-select-text-type">
              <select name="" id="font-type">
                <option value="null">Text type</option>
                <option value="h1">h1</option>
                <option value="h2">h2</option>
                <option value="h3">h3</option>
                <option value="h4">h4</option>
                <option value="h5">h5</option>
                <option value="h6">h6</option>
                <option value="p">paragraph</option>
              </select>
          </div>
          <div className="div-select-font-family">
            <select name="" id="font-family">
              <option value="null">Font family</option> {/*here use an api to fetch font family and handle the api using asynchronous javascipt !*/}
            </select>
          </div>
          <div className="div-font-color">
            <div className="div-font-color-heading">
              Font color
            </div>
            <input type="color" value = {fontColor} onChange= {handleFontColorChange} />
          </div>
          <div className="div-font-size">
            <span>Size</span>
            <div className="font-size">
              <input type="text" defaultValue={16}/>
              <select name="" id="unit-selector">
                <option value="px">px</option>
                <option value="pt">pt</option>
                <option value="pc">pc</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
          </div>
          <div className="div-font-style">
              <p>Font Style</p>
              <div id="font-style">
                <p><b>B</b></p>
                <p><i>I</i></p>
                <p><u>U</u></p>
                <p><strike>S</strike></p>
              </div>
          </div>
          <div className="div-font-alignment">
              <p>Text Alignment</p>
              <span className="material-symbols-outlined">
                format_align_left
              </span>
              <span className="material-symbols-outlined">
                format_align_center
              </span>
              <span className="material-symbols-outlined">
                format_align_right
              </span>
              <span className="material-symbols-outlined">
                format_align_justify
              </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default BasicProperties