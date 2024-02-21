import { useState, useEffect, useRef } from 'react'
import {NavLink} from "react-router-dom";
import menu_bar from '../../images/menu-burger.png'
import close from '../../images/close.png'
import Navbar from '../../components/Navbar'
import './Projects.css'
import Line1 from '../../images/Line1.png'
import Line2 from '../../images/Line3.png'
import Line3 from '../../images/Line4.png'
import Line4 from '../../images/Line5.png'
import Line5 from '../../images/Line6.png'
import Line6 from '../../images/Line7.png'
import memory_game from '../../images/memory-game.png'
import star from '../../images/star.png'
import half_star from '../../images/half-star.png'
import quiz_game from '../../images/chat.png'
import travel from '../../images/travel.png'
import horse from '../../images/horse.png'
import shopping from '../../images/shopping-cart.png'
import javascript from '../../images/JavaScript.png'
import music from '../../images/music4.png'
import space from '../../images/galaxy.png'
import DarkMode from '../../components/DarkMode'
import {useDarkMode} from '../../context/DarkModeContext'
import CvIcon from '../../components/CvIcon'
import movie from '../../images/movie.png'
import tic_tac_toe from '../../images/tic-tac-toe.png' 
import sudoku from '../../images/sudoku.png'
import game from '../../images/2048.png'
import youtube_project from '../../images/youtube-projects.png'
import snake from '../../images/snake.png'
import instagram_project from '../../images/instagram-projects.png' 
import twitter_project from '../../images/twitter-projects.png'
import reactnative_project from '../../images/reactnative-project.png'


function Projects() {
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
        <div className="responsive-title-container projects-responsive-title">
                <p className='responsive-title '>Projelerim</p>
                <div></div>
        </div>
      <div className={`Projects-container ${darkMode ? 'Projects-container-night' : ''}`}>
          <div className="Content-container">  
            <div className="play-projects">
              <p className={`second-title-play ${darkMode ? 'second-title-play-night' : ''}`}>Oyun</p>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                <div className="stars-container-play">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={half_star} alt="half_star" />
                </div>
                <img src={memory_game} alt="memory_game" />
                <div className="project-text-content">
                  <p>Hafıza Oyunu</p>
                  <p>Hafızanıza güveniyor musunuz? Öyleyse bu oyun tam size göre. Seviye atladıkça daha zor bir oyun sizi bekliyor.</p>
                </div>
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                <div className="stars-container-play">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <img src={quiz_game} alt="memory_game" />
                <div className="project-text-content">
                  <p>Quiz Oyunu</p>
                  <p>Kendini test etmek ister misin?  İstediğin kategoriyi seç ve kendini bilgi fırtınasının içine at.</p>
                </div>
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                <div className="stars-container-play">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <img src={travel} alt="memory_game" />
                <div className="project-text-content">
                  <p>İHA Uçur</p>
                  <p>İha’ nın kontrolünü ele almak ister misin? Peki ne kadar havada tutabilirsin onu? Hemen dene ve öğren!</p>
                </div>
              </div>
              </a>  
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-play">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <img src={tic_tac_toe} alt="memory_game" />
                    <div className="project-text-content">
                         <p>Tic Tac Toe</p>
                         <p>Daha önce bu oyunu hiç oynamadıysanız şimdi tam zamanı. Bilgisayara karşı 2 kişilik oyun modu mevcutur...</p>
                    </div>
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
              >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-play">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <img src={game} alt="memory_game" />
                    <div className="project-text-content">
                         <p>2048</p>
                         <p>Bu oyunda ne kadar ustasın. Harika tasarımıyla bu oyunun zevkini doruklarına kadar hissedeceksin...</p>
                    </div>
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-play">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <img src={sudoku} alt="memory_game" />
                    <div className="project-text-content">
                         <p>Sudoku</p>
                         <p>Sudoku oyununda iyi misiniz? Hemen tıkla ve oyunun keyfini çıkar...</p>
                    </div>
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-play">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <img src={snake} alt="memory_game" />
                    <div className="project-text-content">
                         <p>Yılan Oyunu</p>
                         <p>Herkesin mutlaka hayatında bir kere oynadığı yılan oyunu tarihin en iyi tasarımıyla karşınızda :)</p>
                    </div>
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-play">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <img src={reactnative_project} alt="memory_game" />
                    <div className="project-text-content">
                         <p>React Native Mobil</p>
                         <p>Yakında...</p>
                    </div>
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-play">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <img src={reactnative_project} alt="memory_game" />
                    <div className="project-text-content">
                         <p>React Native Mobil</p>
                         <p>Yakında...</p>
                    </div>
              </div>
              </a>
            </div>
            <div className="line-container">
              <img src={Line1} alt="Line" />
              <img src={Line2} alt="Line" />
              <img src={Line3} alt="Line" />
              <img src={Line4} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line5} alt="Line" />
              <img src={Line6} alt="Line" />     
            </div>
            <div className="public-projects">
              <p className={`second-title-play ${darkMode ? 'second-title-play-night' : ''}`}>Genel</p>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-public">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />   
                         <img src={star} alt="star" />
                    </div>
                    <div className="project-text-content text-content-public">
                         <p>Atların Sesi</p>
                         <p>Türkiye’nin atlar üzerine açılmış en iyi web sitesine hoşgeldiniz. Atlara karşı bir hayranlık mı...</p>
                    </div>
                    <img className='rotate' src={horse} alt="memory_game" />
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-public">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <div className="project-text-content text-content-public">
                         <p>UZAY</p>
                         <p>Detaylar Yakında...</p>
                    </div>
                    <img className='rotate' src={space} alt="memory_game" />
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-public">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <div className="project-text-content text-content-public">
                         <p>30 Days Javascript</p>
                         <p>30 gün boyunca 30 JavaScript projesi yapmak mı? Üstelik hızımı almayıp 30 günün üstüne çıkmak mı? Birbirinden...</p>
                    </div>
                    <img className='rotate' src={javascript} alt="memory_game" />
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
                    <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                         <div className="stars-container-public">
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                         </div>
                         <div className="project-text-content text-content-public" >
                              <p>Yazılımcıların Müziği </p>
                              <p>Ekrana baktıkça yazılıma olan sevdanızın artacağı müzik çalar uygulamamı hemen inceleyin :] </p>
                         </div>
                         <img className='rotate' src={music} alt="memory_game" />
                    </div>
               </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                    <div className="stars-container-public">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <div className="project-text-content text-content-public">
                         <p>E-Ticaret Sitesi</p>
                         <p>Kullanışlı ve kaliteli bir e-ticaret sitesi mi arıyorsunuz. Kullanıcı dostu arayüz... </p>
                    </div>
                    <img className='rotate' src={shopping} alt="memory_game" />
              </div>
              </a>
               <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
                  <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                         <div className="stars-container-public">
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                         </div>
                         <div className="project-text-content text-content-public">
                              <p>Film Kutusu </p>
                              <p>Aradığınız filmi, destansı tasarımıyla bu sitede bulabilirsiniz. Hemen tıkla ve filmini bul!] </p>
                         </div>
                         <img className='rotate' src={movie} alt="memory_game" />
                    </div>
               </a>
               <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
                  <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                         <div className="stars-container-public">
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                         </div>
                         <div className="project-text-content text-content-public">
                              <p>Youtube Clone </p>
                              <p>Youtube platformunu birebir clonlamakla kalmayıp daha iyisini tasarlayarak meydan okudum :) </p>
                         </div>
                         <img className='rotate' src={youtube_project} alt="memory_game" />
                    </div>
               </a>
               <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
                  <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                         <div className="stars-container-public">
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                         </div>
                         <div className="project-text-content text-content-public">
                              <p>İnstagram Clone </p>
                              <p>İnstagram platformunu birebir clonlamakla kalmayıp daha iyisini tasarlayarak meydan okudum :) </p>
                         </div>
                         <img className='rotate' src={instagram_project} alt="memory_game" />
                    </div>
               </a>
               <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
                  <div className={`project-box ${darkMode  ? 'project-box-night' : ''}`}>
                         <div className="stars-container-public">
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                         </div>
                         <div className="project-text-content text-content-public">
                              <p>Twitter Clone </p>
                              <p>Twitter platformunu birebir clonlamakla kalmayıp daha iyisini tasarlayarak meydan okudum :) </p>
                         </div>
                         <img className='rotate' src={twitter_project} alt="memory_game" />
                    </div>
               </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Projects