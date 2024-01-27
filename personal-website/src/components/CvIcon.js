import React from 'react'
import './CvIcon.css'
import Cvimg from '../images/cv.png'
import Cv from '../pdf/Cv.pdf';
import CvimgNight from '../images/cv-night.png'

function CvIcon({darkMode}) {
  return (
    <div className='cv-container'>
        <a href={Cv} download={Cv}>
            <img className='cv' src={darkMode ? CvimgNight : Cvimg } alt="cv" />
        </a>
    </div>
  )
}

export default CvIcon