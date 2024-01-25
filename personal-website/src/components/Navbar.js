import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleLinkClick()
  {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Full-Navbar-Container">
      <div className="NavbarContainer">
        <div className='Navbar'>
          <ul className={`ull ${scrolled ? 'scrolled' : ''}`}>
            <li>
              <NavLink className="navbarlink" to="/" onClick={handleLinkClick}>
                <p>Merhaba!</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbarlink" to="/about" onClick={handleLinkClick}>
                <p>Hakkımda</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbarlink" to="/skills" onClick={handleLinkClick}>
                <p>Yeteneklerim</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbarlink" to="/projects" onClick={handleLinkClick}>
                <p>Projelerim</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbarlink" to="/lifecycle" onClick={handleLinkClick}>
                <p>Yaşam Döngüm</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbarlink" to="/contact" onClick={handleLinkClick}>
                <p>İletişim</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
