import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar';
import {NavLink, Link} from "react-router-dom";
import DarkMode from '../../components/DarkMode';
import CvIcon from '../../components/CvIcon';
import {useDarkMode} from '../../context/DarkModeContext'


function About() {
    const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
        <DarkMode darkMode={darkMode} setDarkMode={toggleDarkMode}></DarkMode>
        <Navbar darkmode={darkMode}></Navbar>
        <CvIcon darkMode={darkMode}></CvIcon>
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