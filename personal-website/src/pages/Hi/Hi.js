import React, { useState, useEffect, useRef } from 'react'
import './Hi.css'
import github from '../../images/githubb.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import email from '../../images/email.png'
import {NavLink} from "react-router-dom";
import Navbar from '../../components/Navbar'
import DarkMode from '../../components/DarkMode'
import CvIcon from '../../components/CvIcon'
import {useDarkMode} from '../../context/DarkModeContext'
import menu_bar from '../../images/menu-burger.png'
import close from '../../images/close.png'


function Hi() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [ responsiveBar, setResponsiveBar ] = useState(false);
    const menuRef = useRef(null);
   const ResponsiveMenu = () => {
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

    const closeMenu = () => {
        setResponsiveBar(false); // Burada responsiveBar'ı false olarak ayarlamalısınız.
    };

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
                        <NavLink to="/" onClick={closeMenu}><p>Merhaba</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/about" onClick={closeMenu}><p>Hakkımda</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/skills" onClick={closeMenu}><p>Yeteneklerim</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/projects" onClick={closeMenu}><p>Projelerim</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/lifecycle" onClick={closeMenu}><p>Yaşam Döngüm</p></NavLink>
                    </li>
                     <li>
                        <NavLink to="/contact" onClick={closeMenu}><p>İletişim</p></NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div  className={`home-container ${darkMode ? 'home-container-night' : ''}`} >
            <div className="Social-Media-Container">
                <a href='https://github.com/WarringCoder' target="_blank" rel="noopener noreferrer">
                    <div className={`Social-Media-Box ${darkMode ? 'Social-Media-Box-Night' : ''}`}>
                        <img 
                            src={github} 
                            alt="github"
                        />
                    </div>
                </a>
                <a 
                    href='https://www.linkedin.com/in/ishak-eren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer"
                >
                    <div className={`Social-Media-Box ${darkMode ? 'Social-Media-Box-Night' : ''}`}>
                        <img 
                            src={linkedin} 
                            alt="linkedin"
                        />
                    </div>
                </a>
                <a href='https://www.instagram.com/warring.coder?utm_source=qr&igsh=bzBpcmV2NzhmMXVp' target="_blank" rel="noopener noreferrer">
                    <div className={`Social-Media-Box ${darkMode ? 'Social-Media-Box-Night' : ''}`}>
                        <img 
                            src={instagram} 
                            alt="insatgram"
                        />
                    </div>
                </a>
                <NavLink to='/contact' >
                    <div className={`Social-Media-Box ${darkMode ? 'Social-Media-Box-Night' : ''}`}>
                        <img 
                            src={email} 
                            alt="email"
                        />
                    </div>
                </NavLink>
            </div>
            <div className="responsive-title-container">
                <p className='responsive-title'>Merhaba!</p>
                <div></div>
            </div>
            <div className={`introducing-personal ${darkMode ? 'introducing-personal-night' : ''}`}>
                <p className='hi-name-container'>
                    <p className='hi-name'>Merhaba!</p> <p className='hi-name'>Ben İshak</p>
                </p>
                <p className={`hi-text ${darkMode ? 'hi-text-night' : ''}`}>
                    Uzman olduğum alan Front-End Web. React Developer olarak bir çok projeye imza attım. Front-End geliştirmede profesyonel işler çıkartabiliyorum. Aynı zamanda Figma, Canva gibi araçlar ile tasarımlar oluşturuyorum. Sosyal Medya yönetimi konusunda deneyimliyim. Düzenli olarak içerik üretiyorum...
                </p>
            </div>
            <div className={`portfolio-picture ${darkMode ? 'portfolio-picture-night' : ''}`}></div>
        </div>
    </>
  )
}

export default Hi