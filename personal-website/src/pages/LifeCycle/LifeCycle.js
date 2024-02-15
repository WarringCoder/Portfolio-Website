import React, { useState, useEffect, useRef } from 'react'
import {NavLink} from "react-router-dom";
import menu_bar from '../../images/menu-burger.png'
import close from '../../images/close.png'
import Navbar from '../../components/Navbar'
import './LifeCycle.css'
import worker from '../../images/worker.png'
import settings from '../../images/settings.png'
import DarkMode from '../../components/DarkMode'
import {useDarkMode} from '../../context/DarkModeContext'
import CvIcon from '../../components/CvIcon'

function LifeCycle() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [ responsiveBar, setResponsiveBar ] = useState(false);
    const menuRef = useRef(null);
    const ResponsiveMenu = () =>
    {
        setResponsiveBar(!responsiveBar);
    }

    const handleOuitsideClick = (event) =>
    {
        if (menuRef.current && !menuRef.current.contains(event.target)) 
        {
            setResponsiveBar(true);
        }
    }

    useEffect(() =>
    {
        document.addEventListener('mousedown', handleOuitsideClick)

        return() =>
        {
            document.removeEventListener('mousedown', handleOuitsideClick)
        }
    }, [])

  return (
    <>
      <DarkMode darkMode={darkMode} setDarkMode={toggleDarkMode}></DarkMode>
      <Navbar darkmode={darkMode}></Navbar>
      <CvIcon darkMode={darkMode}></CvIcon>
      <div onClick={ResponsiveMenu} className='menu-bar-container'>
            <img className='menu-bar' src={menu_bar} alt="menu-bar"/>
        </div>
        <div ref={menuRef} className={`responsive-menu ${responsiveBar ? '' : 'responsive-menu-visible'}`}>
            <div className="menu-navbar">
                <img className='menu-close' src={close} alt="close" onClick={ResponsiveMenu}/>
                <p className='menu-text'>iyileşiyorum...</p>
            </div>
            <div className='menu-navbar-bottom-border'></div>
            <div className="menu-content">
                <ul>
                    <li>
                        <NavLink to="/"><p>Merhaba</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/about"><p>Hakkımda</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/skills"><p>Yeteneklerim</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/projects"><p>Projelerim</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/lifecycle"><p>Yaşam Döngüm</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/contact"><p>İletişim</p></NavLink>
                    </li>
                </ul>
            </div>
        </div>
      <div>
          <div className={`LifeCycle ${darkMode ? 'LifeCycle-night' : ''}`}>
               <img src={worker} alt="worker" />
               <div>
                    <img src={settings} alt="settings"/>
                    <p className={`LifeCycle-text ${darkMode ? 'LifeCycle-text-night' : ''}`}>YAKINDA...</p>
               </div>         
          </div>
      </div>
    </>
  )
}

export default LifeCycle