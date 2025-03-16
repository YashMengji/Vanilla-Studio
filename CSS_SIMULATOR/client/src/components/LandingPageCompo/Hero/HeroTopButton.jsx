import "./HeroTopButton.css";
import {ModalContext} from '../Form/ModalProvider';
import { useContext } from "react"
import {Link} from "react-router-dom";

export default function HeroTopButton() {
    // const {isOpen, setIsOpen, active, setActive} = useContext(ModalContext);
    
    return (
            <Link to="/signup">
        <span 
        href=" " 
        class="hero-top-button"
        // onClick={(e) => {
        //     e.preventDefault();
        //     setIsOpen(true);
        //     setActive(true);
        //   }}
        >Try our personalized website creator now! - <span>Learn more</span></span>
        </Link> 
        
        
    );
}