import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import { Button } from './Button';
import '@fortawesome/fontawesome-free/css/all.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const onMouseEnter = () => setDropdown(true);
  // const onMouseLeave = () => setDropdown(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
    closeMobileMenu();
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton)
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        MindEase
        <i className='fab fa-typo3' />
      </Link>
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            {location.pathname === '/' ? (
                <ScrollLink to='/' className='nav-links' smooth={true} duration={500} onClick={scrollToTop}>
                  Home
                </ScrollLink>
              ) : (
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              )}
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
          {/* TODO: The register menu is supposed to be a dropdown menu - client and therapist register*/}
          <li className='nav-item'>
            <Link to='/registerclient' className='nav-links' onClick={closeMobileMenu}>
              Register Client
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/registertherapist' className='nav-links' onClick={closeMobileMenu}>
              Register Therapist
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/mytherapist' className='nav-links' onClick={closeMobileMenu}>
              My Therapist
            </Link>
          </li>
          <li className='nav-item'>
            {location.pathname === '/' ? (
                <ScrollLink to='about-us-section' className='nav-links' smooth={true} duration={500} onClick={closeMobileMenu}>
                  About Us
                </ScrollLink>
              ) : (
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  About Us
                </Link>
              )}
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Get Started</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
