import React, { createContext, useRef, useState, useContext, useEffect } from 'react';

// Create a context for the resizable element's dimensions
const ResizeContext = createContext();

export function useResizeContext() {
  return useContext(ResizeContext);
}

export const ResizeProvider = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [xposition, setXPosition] = useState(0);
  const [yposition, setYPosition] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);

  const elementRef = useRef(null);
  const resizableTemplateRef = useRef(null);
  const resizeTemplate = useRef(null);
  const simwindowRef = useRef(null);
     
  const propertiesValue = {
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
    simwindowRef,
  };

  return (
    <ResizeContext.Provider value={{...propertiesValue}}>
      {children}
    </ResizeContext.Provider>
  );
};
