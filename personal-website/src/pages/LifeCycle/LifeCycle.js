import React from 'react'
import Navbar from '../../components/Navbar'
import './LifeCycle.css'
import worker from '../../images/worker.png'
import settings from '../../images/settings.png'

function LifeCycle() {
  return (
    <>
      <Navbar></Navbar>
      <div LifeCycle-Container>
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