import React from 'react'
import Navbar from '../../components/Navbar'
import './Skills.css'
import farmer from '../../images/farmer.png'
import soil from '../../images/soil.png'
import c from '../../images/C.png'
import Html from '../../images/html.png'
import Css from '../../images/Css.png'
import Bootstrap from '../../images/Bootstrap.png'
import Js from '../../images/JavaScript.png'
import r from '../../images/React.png'
import C_Sharb from '../../images/c_Sharb.png'
import Git from '../../images/git.png'
import GitHub from '../../images/github.png'
import Figma from '../../images/figma.png'
import Canva from '../../images/Canva.png'
import ReactNative from '../../images/ReactNative.png'
import Downarrow from '../../images/down-arrow.png'
import DarkMode from '../../components/DarkMode'
import {useDarkMode} from '../../context/DarkModeContext'
import CvIcon from '../../components/CvIcon'



function Skills() {
    const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <DarkMode darkMode={darkMode} setDarkMode={toggleDarkMode}></DarkMode>
      <Navbar darkmode={darkMode}></Navbar>
      <CvIcon darkMode={darkMode}></CvIcon>
      <div className={`Full-Container-Skills ${darkMode ? 'Full-Container-Skills-Night' : ''}`}>
        <div className="Container">
          <div className="skills-container-1">
              <div className={`inventory ${darkMode ? 'inventory-night' : ''}`}>
                <p className='skill-title'>ENVANTER</p>
                <div className="skill-container">
                  <img src={c} alt="C" />
                  <img src={Html} alt="Html" />
                  <img src={Css} alt="Css" />
                  <img src={Bootstrap} alt="Bootstrap" />
                  <img src={Js} alt="JavaScript" />
                  <img src={r} alt="React" />
                  <img src={C_Sharb} alt="C#" />
                  <img src={Git} alt="Git" />
                  <img src={GitHub} alt="GitHub" />
                  <img src={Figma} alt="Figma" />
                  <img src={Canva} alt="Canva" />
                </div>
              </div>
              <div className="harvest">
                <img src={farmer} alt="farmer" />
                <img src={soil} alt="soil" />
              </div>
              <div className={`learning ${darkMode ? 'learning-night' : ''}`}>
                  <p className='skill-title'>YÜKLENİYOR</p>
                  <div className="skill">
                    <img src={ReactNative} alt="ReactNative" />
                    <p>React Native</p>
                  </div>
              </div>
              <img className='Down-Arrow' src={Downarrow} alt="DownArrow"/>
          </div>
          <div className={`skills-container-2 ${darkMode ? 'skills-container-2-night' : ''}`}>
              <p className={`title-experience ${darkMode ? 'title-experience-night' : ''}`}>Tecrübe Puanlarım</p>
              <div className="experience-container">
                <div className="experience">
                  <div className='bottom-box'>
                    <p>9</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>HTML</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>9</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>CSS</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>JavaScript</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>React</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>7</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>Bootstrap</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>9</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>C</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>3</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>C#</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>7</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>Git</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>GitHub</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>7</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>Figma</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className={`top-box ${darkMode ? 'top-box-night' : ''}`}></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>Canva</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p></p>
                    <div className='top-box'></div>
                  </div>
                  <p className={`experience-title ${darkMode ? 'experience-title-night' : ''}`}>React Native</p>
                </div>
              </div>
          </div>
         </div>
         
      </div>
    </>
  )
}

export default Skills