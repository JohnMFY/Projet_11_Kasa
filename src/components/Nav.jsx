import React from 'react';
import "./Nav.css";

function Nav() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img src="src\assets\Logo.png" alt="Logo" />
      </div>
      <div className='navBtn'>
        <div>Accueil</div>
        <div>À propos</div>
      </div>
    </nav>
  )
}

export default Nav
