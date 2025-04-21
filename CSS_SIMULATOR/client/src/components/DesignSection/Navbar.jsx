import React from 'react'
import './Css/Navbar.css'
import {Link} from "react-router-dom";
import NavLogo from '../LandingPageCompo/Navbar/NavLogo';

function Navbar() {
  return (
    <>
      <div className="div-navbar">
        <NavLogo/>
        <Link to="/dashboard">
        <span class="material-symbols-outlined exit-studio-btn">
          logout
        </span>
        </Link>
      </div>
    </>
  )
}

export default Navbar