import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';
import night from '../images/Night.png'

function Navbar() {
  return (
    <>
        <div className='NavbarContainer'>
            <div className="Navbar">
                <ul>
                    <li>
                        <NavLink to='/'><p>Merhaba!</p></NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'><p>Hakkımda</p></NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills'><p>Yeteneklerim</p></NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'><p>Projelerim</p></NavLink>
                    </li>
                    <li>
                        <NavLink to='/lifecycle'><p>Yaşam Döngüm</p></NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'><p>İletişim</p></NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className='Dark-Mode-Night'><img src={night} alt="night" /></div>
    </>
  )
}

export default Navbar