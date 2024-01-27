import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar({ darkmode }) {
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

  function handleLinkClick() {
    window.scrollTo(0, 0);
  }


  return (
    <div className="Full-Navbar-Container">
      <div className="NavbarContainer">
        <div className="Navbar">
          <ul className={`ull ${scrolled ? 'scrolled' : ''} ${darkmode ? 'scrolled-night' : ''}`}>
            <li>
              <NavLink
                className={`navbarlink ${darkmode ? 'navbarlink-night' : ''} ${darkmode && 'active' ? 'active-night' : ''}`}
                to="/"
                onClick={handleLinkClick}
              >
                <p className="linktext">Merhaba!</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`navbarlink ${darkmode ? 'navbarlink-night' : ''} ${darkmode && 'active' ? 'active-night' : ''}`}
                to="/about"
                onClick={handleLinkClick}
              >
                <p className="linktext">Hakkımda</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`navbarlink ${darkmode ? 'navbarlink-night' : ''} ${darkmode && 'active' ? 'active-night' : ''}`}
                to="/skills"
                onClick={handleLinkClick}
              >
                <p className="linktext">Yeteneklerim</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`navbarlink ${darkmode ? 'navbarlink-night' : ''} ${darkmode && 'active' ? 'active-night' : ''}`}
                to="/projects"
                onClick={handleLinkClick}
              >
                <p className="linktext">Projelerim</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`navbarlink ${darkmode ? 'navbarlink-night' : ''} ${darkmode && 'active' ? 'active-night' : ''}`}
                to="/lifecycle"
                onClick={handleLinkClick}
              >
                <p className="linktext">Yaşam Döngüm</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`navbarlink ${darkmode ? 'navbarlink-night' : ''} ${darkmode && 'active' ? 'active-night' : ''}`}
                to="/contact"
                onClick={handleLinkClick}
              >
                <p className="linktext">İletişim</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
