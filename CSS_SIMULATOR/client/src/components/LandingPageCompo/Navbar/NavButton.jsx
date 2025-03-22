import "./NavButton.css";
import {ModalContext} from '../Form/ModalProvider';
import { useContext } from "react";
import { Link } from "react-router-dom";
 
function NavButton() {

  // const {isOpen, setIsOpen, active, setActive} = useContext(ModalContext);

  return (
    <div className="buttons">
      <Link to="/signup">
        <button 
        className="signup" 
        // onClick={() => {
        //   setIsOpen(!isOpen);
        //   setActive(!active);
        // }}
        >
          Sign In</button>
      </Link>
      
      {/* <button 
      className="login"
      onClick={() => {
        setIsOpen(!isOpen);
        setActive(true);
      }} 
      >Start Creating</button> */}
    </div>
  );
}

export default NavButton;