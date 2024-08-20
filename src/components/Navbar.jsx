import React from 'react';
import './Navbar.css';

function Navbar() {
  
  return (
    <nav className="navbar">
      <div className='navbar_content'>
        <div className='logo_container'>
          <div className="navbar_logo">
            <img
              className="c-navbar__desktop__logo__img c-navbar__desktop__logo__img--dark"
              src="https://bigbear.ai/wp-content/themes/bigbear-theme/assets/images/bbai-logo-search.svg"
              alt="BigBear.ai logo dark version"
            />
            <img 
              className="c-navbar__desktop__logo__img c-navbar__desktop__logo__img--light" 
              src="https://bigbear.ai/wp-content/themes/bigbear-theme/assets/images/Brand-navbar.svg" 
              alt="BigBear.ai logo light version"
            />
          </div>
        </div>
      
        <ul className="c-navbar__desktop__navigation__menu__parent">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#diagram">Diagram</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
