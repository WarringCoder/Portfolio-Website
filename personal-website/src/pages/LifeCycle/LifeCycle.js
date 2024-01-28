import React from 'react'
import Navbar from '../../components/Navbar'
import './LifeCycle.css'
import worker from '../../images/worker.png'
import settings from '../../images/settings.png'
import DarkMode from '../../components/DarkMode'
import {useDarkMode} from '../../context/DarkModeContext'
import CvIcon from '../../components/CvIcon'

function LifeCycle() {
    const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <DarkMode darkMode={darkMode} setDarkMode={toggleDarkMode}></DarkMode>
      <Navbar darkmode={darkMode}></Navbar>
      <CvIcon darkMode={darkMode}></CvIcon>
      <div>
          <div className={`LifeCycle ${darkMode ? 'LifeCycle-night' : ''}`}>
               <img src={worker} alt="worker" />
               <div>
                    <img src={settings} alt="settings"/>
                    <p className={`LifeCycle-text ${darkMode ? 'LifeCycle-text-night' : ''}`}>YAKINDA...</p>
               </div>         
          </div>
      </div>
    </>
  )
}

export default LifeCycle