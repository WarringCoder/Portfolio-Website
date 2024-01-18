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


function Skills() {
  return (
    <>
      <Navbar></Navbar>
      <div className='Full-Container'>
        <div className="Container">
          <div className="skills-container-1">
              <div className='inventory'>
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
              <div className="learning">
                  <p className='skill-title'>YÜKLENİYOR</p>
                  <div className="skill">
                    <img src={ReactNative} alt="ReactNative" />
                    <p>React Native</p>
                  </div>
              </div>
              <img className='Down-Arrow' src={Downarrow} alt="DownArrow"/>
          </div>
          <div className="skills-container-2">
              <p className='title-experience'>Tecrübe Puanlarım</p>
              <div className="experience-container">
                <div className="experience">
                  <div className='bottom-box'>
                    <p>9</p>
                    <div className='top-box'></div>
                  </div>
                  <p>HTML</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>9</p>
                    <div className='top-box'></div>
                  </div>
                  <p>CSS</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className='top-box'></div>
                  </div>
                  <p>JavaScript</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className='top-box'></div>
                  </div>
                  <p>React</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>7</p>
                    <div className='top-box'></div>
                  </div>
                  <p>Bootstrap</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>9</p>
                    <div className='top-box'></div>
                  </div>
                  <p>C</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>3</p>
                    <div className='top-box'></div>
                  </div>
                  <p>C#</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>7</p>
                    <div className='top-box'></div>
                  </div>
                  <p>Git</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className='top-box'></div>
                  </div>
                  <p>GitHub</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>7</p>
                    <div className='top-box'></div>
                  </div>
                  <p>Figma</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p>8</p>
                    <div className='top-box'></div>
                  </div>
                  <p>Canva</p>
                </div>
                <div className="experience">
                  <div className='bottom-box'>
                    <p></p>
                    <div className='top-box'></div>
                  </div>
                  <p>React Native</p>
                </div>
              </div>
          </div>
         </div>
         
      </div>
    </>
  )
}

export default Skills