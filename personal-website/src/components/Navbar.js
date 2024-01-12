import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className='NavbarContainer'>
        <ul>
            <li>
                <NavLink to='/'>Merhaba</NavLink>
            </li>
            <li>
                <NavLink to='/about'>Hakkımda</NavLink>
            </li>
            <li>
                <NavLink to='/skills'>Yetenekler</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar