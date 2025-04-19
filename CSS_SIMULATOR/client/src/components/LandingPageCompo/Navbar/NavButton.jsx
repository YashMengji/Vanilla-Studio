import "./NavButton.css";
import { ModalContext } from '../Form/ModalProvider';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

function NavButton() {

  // const {isOpen, setIsOpen, active, setActive} = useContext(ModalContext);
  const { logUser } = useUser();

  return (
    <div className="buttons">
      {logUser?._id ? (
        <button className="signup">
          <div>Welcome, {logUser?.fname}</div>
        </button>
      ) : (

        <Link to="/signup">
          <button className="signup">
            <div>Sign In</div>
          </button>
        </Link>
      )}

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