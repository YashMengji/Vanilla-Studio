import NavLink from "./NavLink";
import "./NavLinkSection.css";

function NavLinkSection() {
    return (
        <ul className="nav-links">
            <NavLink href="#" text="Home" />
            <NavLink href="#" text="Product" />
            <NavLink href="#" text="About Us" />
            <NavLink href="#" text="Support" />
        </ul>
    );
}

export default NavLinkSection;