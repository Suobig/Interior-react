import React from 'react';
import './Header.css';

function Header() {
  return(
    <div className="header">
      <a href="./" className="logo">
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
      </a>
      <div className="header-right">
        <ul className="nav">
          <li><a className="nav-item nav-active" href="index.html">home</a></li>
          <li><a className="nav-item" href="products.html">products</a></li>
          <li><a className="nav-item" href="./">history</a></li>
          <li><a className="nav-item" href="./">showroom</a></li>
          <li><a className="nav-item" href="contact.html">contact</a></li>
          <li>
            <a href="./" className="nav-item__search">
              <span className="fas fa-search"></span>
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Header;
