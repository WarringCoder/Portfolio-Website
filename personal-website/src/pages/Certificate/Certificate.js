import React from 'react'
import './Certificate.css'
import {Link} from 'react-router-dom'
import certificate from '../../images/certificate.png'
import react_C from '../../pdf/React.pdf'
import Git_GitHub_C from '../../pdf/GitGitHub.pdf'
import Operating_System_C from '../../pdf/operating_ system_certificate.pdf'
import Information_technologies from '../../pdf/information_ technologies_certificate.pdf'

function Certificate() {
  return (
    <div className='Full-Container'>
        <div className="button-container">
            <Link to='/about'>
                <button className='Come-Back-Button'>Geri Dön</button>
            </Link>
        </div>
        <div className="Certificate-Container">
            <div className="Certificate">
                <a href={react_C} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p>REACT</p>
                        <p>Sadık Turan / UDEMY</p>
                    </div>
                </a>
            </div>
            <div className="Certificate">
                <a href={Git_GitHub_C} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p>Git & GitHub</p>
                        <p>Atıl Samancıoğlu / BTK</p>
                    </div>
                </a>
            </div>
            <div className="Certificate">
                <a href={Operating_System_C} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p>İşletim Sistemleri</p>
                        <p>Mustafa Ermiş/ BTK</p>
                    </div>
                </a>
            </div>
            <div className="Certificate">
                <a href={Information_technologies} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p>Bilgi Teknolojilerine Giriş</p>
                        <p>Mustafa Ermiş / BTK</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Certificate