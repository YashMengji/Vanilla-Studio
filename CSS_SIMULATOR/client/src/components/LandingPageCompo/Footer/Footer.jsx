import "./Footer.css";
import {ModalContext} from '../Form/ModalProvider';
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    
    return (
        <div className="footer">
            <div className="footer-begin">
                <button className="footer-btn-top">Get Started</button>
                <div className="footer-content">
                    <h2 className="main-heading">Boost your productivity.</h2>
                    <h2 className=" main-heading">Start using our Vanilla Studio today.</h2>
                </div>
                <Link to="/signup">
                <button 
                className="footer-btn-bottom">
                    Get Started
                </button>
                </Link>
            </div>
            <hr />
            <div className="footer-rights">
                <div className="copy-rights">&copy; 2024 Vanilla Studio. Inc. All rights reserved.</div>
            </div>
        </div>
    );
}