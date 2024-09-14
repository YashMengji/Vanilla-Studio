import React, { createContext, useRef, useState } from 'react';

// Create a context for the resizable element's dimensions
export const ResizeContext = createContext();

export const ResizeProvider = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);
  const resizableTemplateRef = useRef(null);

  return (
    <ResizeContext.Provider value={{ width, setWidth, height, setHeight, elementRef, resizableTemplateRef }}>
      {children}
    </ResizeContext.Provider>
  );
};
