import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(true); // Default to Sign-Up

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, active, setActive }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider