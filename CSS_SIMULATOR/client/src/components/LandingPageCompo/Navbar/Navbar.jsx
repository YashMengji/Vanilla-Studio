import "./Navbar.css";
import NavLogo from "./NavLogo";
import NavLinkSection from "./NavLinkSection";
import NavButton from "./NavButton";

function Navbar() {
    return (
        <div className="navbar">
            <NavLogo />
            <NavLinkSection />
            <NavButton />
        </div>
    );
}

export default Navbar;