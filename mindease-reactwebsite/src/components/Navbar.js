import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MindEase
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                    Profile
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                    Login
                </Link>
            </li>
            {/* The register menu is supposed to be a dropdown menu - client and therapist register*/}
            <li className='nav-item'>
                <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                    Register
                </Link>
            </li>
            {/* About Us is supposed to scroll down to the about us section of a page and add back to top button */}
            <li className='nav-item'>
                <Link to='/aboutus' className='nav-links-mobile' onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
