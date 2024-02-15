import React, { useState, useEffect, useRef } from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './Contact.css'
import youtube from '../../images/youtube-footer.png'
import instagram from '../../images/instagram-footer.png'
import linkedin from '../../images/linkedin-footer.png'
import github from '../../images/github-footer.png'
import DarkMode from '../../components/DarkMode'
import {useDarkMode} from '../../context/DarkModeContext'
import CvIcon from '../../components/CvIcon'
import menu_bar from '../../images/menu-burger.png'
import close from '../../images/close.png'




function Contact() {
     const year = new Date().getFullYear();
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
      <div className={`Contact-Container ${darkMode ? 'Contact-Container-night' : ''}`}>
          <div className="title">
               <p className={`contact-title ${darkMode ? 'contact-title-night' : ''}`}>İLETİŞİM</p>
               <div className='contact-border'></div>
          </div>
          <form action="https://formspree.io/f/xyyrkzwq" method="post">
               <div>
                    <label className={`contact-label ${darkMode ? 'contact-label-night' : ''}`} htmlFor="name">İsim</label>
                    <input className={`contact-input ${darkMode ? 'contact-input-night' : ''}`} type="text" id="name" name="name" placeholder='Giriniz...'/>
               </div>
               <div>
                    <label className={`contact-label ${darkMode ? 'contact-label-night' : ''}`} htmlFor="email">Email</label>
                    <input className={`contact-input ${darkMode ? 'contact-input-night' : ''}`} type="email" id="email" name="email" placeholder='Giriniz...'/>
               </div>
               <div>
                    <label className={`contact-label ${darkMode ? 'contact-label-night' : ''}`} htmlFor="text">Mesajınız</label>
                    <textarea className={`contact-texteria ${darkMode ? 'contact-texteria-night' : ''}`} name="text" id="text" cols="70" rows="10" placeholder='Giriniz...'></textarea>
               </div>
               <button className={`contact-button ${darkMode ? 'contact-button-night' : ''}`} type="submit">Gönder</button>
          </form>
          <footer className={`footer ${darkMode ? 'footer-night' : ''}`}>
               <div className='second1'>
                    <p className='motivation'>“ İyileşiyorum, Güçleniyorum, Gelişiyorum ”</p>
                    <div className='social-media'>
                         <p>SOCİAL</p>
                         <div className="social-media-icon">
                              <img src={youtube} alt="youtube" />
                              <a href='https://www.instagram.com/warring.coder?utm_source=qr&igsh=bzBpcmV2NzhmMXVp' target="_blank" rel="noopener noreferrer">
                                   <img src={instagram} alt="instagram" />
                              </a>
                               <a 
                                   href='https://www.linkedin.com/in/ishak-eren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer"
                              >
                              <img src={linkedin} alt="linkedin" />
                              </a>
                              <a href='https://github.com/WarringCoder' target="_blank" rel="noopener noreferrer">
                                   <img src={github} alt="github" />
                              </a>
                         </div>
                    </div>
               </div>
               <div className='footer-border'></div>
               <div className="producer">
                   <p>&copy; Copyright {year}.  <span>Made by İshak Eren</span> </p>
               </div>
          </footer>
      </div>
    </>
  )
}

export default Contact