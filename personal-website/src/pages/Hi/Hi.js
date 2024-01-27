import React from 'react'
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


function Hi() {
    const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
        
        <DarkMode darkMode={darkMode} setDarkMode={toggleDarkMode}></DarkMode>
        <Navbar darkmode={darkMode}></Navbar>
        <CvIcon darkMode={darkMode}></CvIcon>
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
            <div className={`introducing-personal ${darkMode ? 'introducing-personal-night' : ''}`}>
                <p className='hi-name'>
                    Merhaba! Ben İshak
                </p>
                <p className={`hi-text ${darkMode ? 'hi-text-night' : ''}`}>
                    Uzman olduğum alan Front-End Web. React / React Native Developer olarak çalışıyorum. Front-End geliştirmede profesyonel işler çıkartabiliyorum. Aynı zamanda Figma, Canva gibi araçlar ile tasarımlar oluşturuyorum. Sosyal Medya yönetimi konusunda deneyimliyim. Düzenli olarak içerik üretiyorum...
                </p>
            </div>
            <div className={`portfolio-picture ${darkMode ? 'portfolio-picture-night' : ''}`}></div>
        </div>
    </>
  )
}

export default Hi