import React from 'react'
import './Hi.css'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import email from '../../images/email.png'
import {NavLink} from "react-router-dom";
import Navbar from '../../components/Navbar'
import DarkMode from '../../components/DarkMode'
import CvIcon from '../../components/CvIcon'


function Hi() {
  return (
    <>
        <Navbar></Navbar>
        <DarkMode></DarkMode>
        <CvIcon></CvIcon>
        <div className="home-container">
            <div className="Social-Media-Container">
                <a href='https://github.com/WarringCoder' target="_blank" rel="noopener noreferrer">
                    <div className="Social-Media-Box">
                    <i 
                        className="fa-brands fa-github" 
                        style={{color: "#eeeeee",}}
                        >
                        </i>
                    </div>
                </a>
                <a 
                    href='https://www.linkedin.com/in/ishak-eren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer"
                >
                    <div className="Social-Media-Box">
                        <img 
                            src={linkedin} 
                            alt="linkedin"
                        />
                    </div>
                </a>
                <a href='https://www.instagram.com/warring.coder?utm_source=qr&igsh=bzBpcmV2NzhmMXVp' target="_blank" rel="noopener noreferrer">
                    <div className="Social-Media-Box">
                        <img 
                            src={instagram} 
                            alt="insatgram"
                        />
                    </div>
                </a>
                <NavLink to='/contact' >
                    <div className="Social-Media-Box">
                        <img 
                            src={email} 
                            alt="email"
                        />
                    </div>
                </NavLink>
            </div>
            <div className="introducing-personal">
                <p>
                    Merhaba! Ben İshak
                </p>
                <p>
                    Uzman olduğum alan Front-End Web. React / React Native Developer olarak çalışıyorum. Front-End geliştirmede profesyonel işler çıkartabiliyorum. Aynı zamanda Figma, Canva gibi araçlar ile tasarımlar oluşturuyorum. Sosyal Medya yönetimi konusunda deneyimliyim. Düzenli olarak içerik üretiyorum...
                </p>
            </div>
            <div className="portfolio-picture"></div>
        </div>
    </>
  )
}

export default Hi