import React from 'react'
import './CvIcon.css'
import Cvimg from '../images/cv.png'
import Cv from '../pdf/Cv.pdf';

function CvIcon() {
  return (
    <div className='cv-container'>
        <a href={Cv} download={Cv}>
            <img className='cv' src={Cvimg} alt="cv" />
        </a>
    </div>
  )
}

export default CvIcon