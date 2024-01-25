import React from 'react'
import Navbar from '../../components/Navbar'
import './LifeCycle.css'
import worker from '../../images/worker.png'
import settings from '../../images/settings.png'
import DarkMode from '../../components/DarkMode'

function LifeCycle() {
  return (
    <>
      <Navbar></Navbar>
      <DarkMode></DarkMode>
      <div>
          <div className="LifeCycle">
               <img src={worker} alt="worker" />
               <div>
                    <img src={settings} alt="settings"/>
                    <p>YAKINDA...</p>
               </div>         
          </div>
      </div>
    </>
  )
}

export default LifeCycle