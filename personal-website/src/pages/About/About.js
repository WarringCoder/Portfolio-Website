import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import Navbar from '../../components/Navbar';
import {NavLink, Link} from "react-router-dom";
import DarkMode from '../../components/DarkMode';
import CvIcon from '../../components/CvIcon';
import {useDarkMode} from '../../context/DarkModeContext';
import menu_bar from '../../images/menu-burger.png'
import close from '../../images/close.png'


function About() {
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
        <div className="responsive-title-container about-responsive-title">
                <p className='responsive-title '>Hakkımda</p>
                <div></div>
        </div>
        <div className={`About-Container ${darkMode ? 'About-Container-Night' : ''}`}>
            <div className="content-about">
                <div className="title">
                    <p className={`about-title ${darkMode ? 'about-title-night' : ''}`}>HAKKIMDA</p>
                    <div className={`about-border-bottom ${darkMode ? 'about-border-bottom-night' : ''}`}></div>
                </div>
                <p className={`about-text ${darkMode ? 'about-text-night' : ''  }`}> Yaklaşık 3 yıldan beri Front-End olanında kendimi geliştiriyorum ve bir çok projeye imza attım. Ortak projelerde bulundum. Takım çalışmalarına kolayca adapte olabiliyor ve ekip arkadaşlarımla uyum içerisinde hareket edebiliyorum. React / React Native teknolojilerinde tecrübeliyim. Bu teknolojilerle profesyonel işlere imza attım. Yeni teknolojilere olan merakım gelişimimin anahtarı.
                Figma ve Canva  tasarım araçlarını aktif olarak kullanıyorum .Çünkü günlük, düzemli bir şekilde  sosyal medyamda  içerik paylaşıyorum. Sosyal medya yönetimi benim yetenekli olduğum alanlardan biri. Şu an iki aktif hesabı yönetiyorum...</p>
                <div className="button-group">
                    <NavLink to='/skills'>
                        <button className={`about-button ${darkMode ? 'about-button-night' : ''  }`}>Yeteneklerim</button>   
                    </NavLink>
                    <Link to='/about/certificate'>    
                        <button  className={`about-button ${darkMode ? 'about-button-night' : ''  }`}>Sertifikalarım</button>
                    </Link>
                     
                    <NavLink to='/projects'>
                        <button className={`about-button ${darkMode ? 'about-button-night' : ''  }`}>Projelerim</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default About