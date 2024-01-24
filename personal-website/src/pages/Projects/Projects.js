import React from 'react'
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


function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <div className='Projects-container'>
          <div className="Content-container">  
            <div className="play-projects">
              <p className='second-title-play'>Oyun</p>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className="project-box">
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
              <div className="project-box">
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
              <div className="project-box">
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
              <div className="project-box">
                    <div className="stars-container-play">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <img src={space} alt="memory_game" />
                    <div className="project-text-content">
                         <p>UZAY</p>
                         <p>Detaylar Yakında...</p>
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
              <img src={Line6} alt="Line" />     
            </div>
            <div className="public-projects">
              <p className='second-title-public'>Genel</p>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
              <div className="project-box">
                    <div className="stars-container-public">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />   
                         <img src={star} alt="star" />
                    </div>
                    <div className="project-text-content">
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
              <div className="project-box">
                    <div className="stars-container-public">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <div className="project-text-content">
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
              <div className="project-box">
                    <div className="stars-container-public">
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                         <img src={star} alt="star" />
                    </div>
                    <div className="project-text-content">
                         <p>30 Days Javascript</p>
                         <p>30 gün boyunca 30 JavaScript projesi yapmak mı? Üstelik hızımı almayıp 30 günün üstüne çıkmak mı? Birbirinden...</p>
                    </div>
                    <img src={javascript} alt="memory_game" />
              </div>
              </a>
              <a 
               href='https://warringcoder.github.io/JavaScript/Medium_Project/Music_Player/index.html' 
               target="_blank" 
               rel="noopener noreferrer"
               >
                    <div className="project-box">
                         <div className="stars-container-public">
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                         </div>
                         <div className="project-text-content">
                              <p>Yazılımcıların Müziği </p>
                              <p>Ekrana baktıkça yazılıma olan sevdanızın artacağı müzik çalar uygulamamı hemen inceleyin :] </p>
                         </div>
                         <img src={music} alt="memory_game" />
                    </div>
               </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Projects