import React from 'react'
import './Certificate.css'
import {Link} from 'react-router-dom'
import certificate from '../../images/certificate.png'
import react_C from '../../pdf/React.pdf'
import Git_GitHub_C from '../../pdf/GitGitHub.pdf'
import Operating_System_C from '../../pdf/operating_ system_certificate.pdf'
import Information_technologies from '../../pdf/information_ technologies_certificate.pdf'
import {useDarkMode} from '../../context/DarkModeContext'


function Certificate() {
    const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`Full-Container ${darkMode ? 'Full-Container-Night' : ''}`}>
        <div className="button-container">
            <Link to='/about'>
                <button className={`Come-Back-Button ${darkMode ? 'Come-Back-Button-Night' : ''}`}>Geri Dön</button>
            </Link>
        </div>
        <div className="Certificate-Container">
            <div className="Certificate">
                <a className={`Certificate-link ${darkMode ? 'Certificate-link-night' : ''}`} href={react_C} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>REACT</p>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>Sadık Turan / UDEMY</p>
                    </div>
                </a>
            </div>
            <div className="Certificate">
                <a className={`Certificate-link ${darkMode ? 'Certificate-link-night' : ''}`} href={Git_GitHub_C} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>Git & GitHub</p>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>Atıl Samancıoğlu / BTK</p>
                    </div>
                </a>
            </div>
            <div className="Certificate">
                <a className={`Certificate-link ${darkMode ? 'Certificate-link-night' : ''}`} href={Operating_System_C} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>İşletim Sistemleri</p>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>Mustafa Ermiş/ BTK</p>
                    </div>
                </a>
            </div>
            <div className="Certificate">
                <a className={`Certificate-link ${darkMode ? 'Certificate-link-night' : ''}`} href={Information_technologies} target="_blank" rel="noopener noreferrer">
                    <img src={certificate} alt="pdf" />
                    <div>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>Bilgi Teknolojilerine Giriş</p>
                        <p className={`certificate-text ${darkMode ? 'certificate-text-night' : ''}`}>Mustafa Ermiş / BTK</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Certificate