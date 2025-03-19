import React from 'react';
import "./Nav.css";
import { NavLink } from "react-router";


function Nav() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <NavLink to={"/"}>  
          <img src="src\assets\Logo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className='navBtn'>
        <NavLink to={"/"}>
        <div className='acceuil'>Accueil</div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className='propos'>À propos</div>
        </NavLink>    
      </div>
    </nav>
  )
}

export default Nav
