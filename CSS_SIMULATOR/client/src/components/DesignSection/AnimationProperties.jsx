import React from 'react'
import {useRef} from "react"

function AnimationProperties() {

  const entranceRef = useRef();
  const hoverRef = useRef();
  const clickRef = useRef();
  const scrollRef = useRef();
  const loopRef = useRef();

  function displayAnimationOptions(num){
    switch(num) {
      case 1: 
        entranceRef.current.style.display === "grid" ? entranceRef.current.style.display = "none" : entranceRef.current.style.display = "grid";
        break;
      case 2: 
        hoverRef.current.style.display === "grid" ? hoverRef.current.style.display = "none" : hoverRef.current.style.display = "grid";
        break;
      case 3: 
        clickRef.current.style.display === "grid" ? clickRef.current.style.display = "none" : clickRef.current.style.display = "grid";
        break;
      case 4: 
        scrollRef.current.style.display === "grid" ? scrollRef.current.style.display = "none" : scrollRef.current.style.display = "grid";
        break;
      case 5: 
        loopRef.current.style.display === "grid" ? loopRef.current.style.display = "none" : loopRef.current.style.display = "grid";
        break;
    }
  }
  

  return (
    <div className="div-animation-properties-panel">
      <div className="div-animation-prop-heading">
        Animations and Effects
      </div>
      <div className="div-animation-sections">
        <div className="div-break-line"></div>

        <div className="animation-section div-animation-entrance" onClick={() => {displayAnimationOptions(1)}} >
          Entrance
        </div>
        <div className="div-entrance-section"  ref={entranceRef}>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Glide_animated.png" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Glide
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Fade_animated.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Fade
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
        </div>
        <div className="div-break-line"></div>

        <div className="animation-section div-animation-hover" onClick={() => {displayAnimationOptions(2)}}>
          Hover
        </div>
        <div className="div-entrance-section"  ref={hoverRef}>
        <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Glide_animated.png" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Glide
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Fade_animated.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Fade
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
        </div>
        <div className="div-break-line"></div>

        <div className="animation-section div-animation-click" onClick={() => {displayAnimationOptions(3)}}>
          Click
        </div>
        <div className="div-entrance-section"  ref={clickRef}>
        <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Glide_animated.png" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Glide
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Fade_animated.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Fade
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
        </div>
        <div className="div-break-line"></div>

        <div className="animation-section div-animation-scroll" onClick={() => {displayAnimationOptions(4)}}>
          Scroll
        </div>
        <div className="div-entrance-section"  ref={scrollRef}>
        <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Glide_animated.png" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Glide
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Fade_animated.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Fade
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
        </div>
        <div className="div-break-line"></div>

        <div className="animation-section div-animation-loop" onClick={() => {displayAnimationOptions(5)}}>
          Loop
        </div>
        <div className="div-entrance-section" ref={loopRef}>
        <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Glide_animated.png" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Glide
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/Fade_animated.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              Fade
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
          <div className="div-entrance-animation">
            <div className="div-entrance-animation-img">
              <img className="entrance-animation-img" src="images/None_selected.gif" alt="" />
            </div>
            <div className="div-entrance-animation-text">
              None
            </div>
          </div>
        </div>
        <div className="div-break-line"></div>
      </div>
    </div>
  )
}

export default AnimationProperties