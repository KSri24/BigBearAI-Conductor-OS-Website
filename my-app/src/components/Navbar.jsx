import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo_container'>
        <div className="navbar_logo">
          {/* <img
            className="c-navbar__desktop__logo__img c-navbar__desktop__logo__img--dark"
            src="https://bigbear.ai/wp-content/themes/bigbear-theme/assets/images/bbai-logo-search.svg"
            alt="BigBear.ai logo dark version"
          /> */}

          <img 
            class="c-navbar__desktop__logo__img c-navbar__desktop__logo__img--light" 
            src="https://bigbear.ai/wp-content/themes/bigbear-theme/assets/images/Brand-navbar.svg" 
            alt="BigBear.ai logo dark version"
          />

        </div>
      </div>
      <ul className="navbar_list">
        <li><a href="/">Overview</a></li>
        <li><a href="/about">Diagram</a></li>
        <li><a href="/services">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
