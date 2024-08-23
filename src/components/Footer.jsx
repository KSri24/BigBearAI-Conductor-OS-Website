import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-header">
        <h3>Joshua Cancio</h3>
        <h3>Sriram Koduru</h3>
        </div>
       <div className="footer-info">
            <p>
            <span>jd.cancio1@gmail.com</span> 
            <span>linkedin.com/in/jdcancio</span>
             <span>240-601-5564</span></p>
            <p><span>srikoduru@hotmail.com</span><span>linkedin.com/in/sriramkoduru </span><span>571-208-6845</span></p>
        </div>  
        <p className="resume">
                <span><a href="https://drive.google.com/file/d/1m9zvLsMuKa7Q-mVVdXkWaIu3uWcOl8t2/view?usp=sharing" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="resume-button">
  Joshua's Resume
</a>
</span>
                <span><a href="https://drive.google.com/file/d/1iF26ipDsAFbyZmSrEzNMd1Ye6uVDZagE/view?usp=sharing" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="resume-button">
  Sriram's Resume
</a>
</span>
            </p>
      <div className="footer-content">

        <div className="footer-logo">
          <img
            src="https://bigbear.ai/wp-content/themes/bigbear-theme/assets/images/brand-footer-2.svg"
            alt="BigBear.ai logo"
          />
        </div>
        <ul className="footer-menu">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#diagram">Diagram</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
      </div>
    </footer>
  );
}

export default Footer;
