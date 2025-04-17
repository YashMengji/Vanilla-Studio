import "./NavLogo.css";
import logo from "/logo.svg";

function NavLogo() {
    return (
        <div className="nav-logo">
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default NavLogo;