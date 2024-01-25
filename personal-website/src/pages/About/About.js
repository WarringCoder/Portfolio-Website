import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar';
import {NavLink, Link} from "react-router-dom";
import DarkMode from '../../components/DarkMode';

function About() {
  return (
    <>
        <Navbar></Navbar>
        <DarkMode></DarkMode>
        <div className='About-Container'>
            <div className="content-about">
                <div className="title">
                    <p>HAKKIMDA</p>
                    <div></div>
                </div>
                <p> Yaklaşık 3 yıldan beri Front-End olanında kendimi geliştiriyorum ve bir çok projeye imza attım. Ortak projelerde bulundum. Takım çalışmalarına kolayca adapte olabiliyor ve ekip arkadaşlarımla uyum içerisinde hareket edebiliyorum. React / React Native teknolojilerinde tecrübeliyim. Bu teknolojilerle profesyonel işlere imza attım. Yeni teknolojilere olan merakım gelişimimin anahtarı.
                Figma ve Canva  tasarım araçlarını aktif olarak kullanıyorum .Çünkü günlük, düzemli bir şekilde  sosyal medyamda  içerik paylaşıyorum. Sosyal medya yönetimi benim yetenekli olduğum alanlardan biri. Şu an iki aktif hesabı yönetiyorum...</p>
                <div className="button-group">
                    <NavLink to='/skills'>
                        <button className='about-button'>Yeteneklerim</button>   
                    </NavLink>
                    <Link to='/about/certificate'>    
                        <button  className='about-button'>Sertifikalarım</button>
                    </Link>
                     
                    <NavLink to='/projects'>
                        <button className='about-button'>Projelerim</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default About