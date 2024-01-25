import React from 'react'
import Navbar from '../../components/Navbar'
import './Contact.css'
import youtube from '../../images/youtube-footer.png'
import instagram from '../../images/instagram-footer.png'
import linkedin from '../../images/linkedin-footer.png'
import github from '../../images/github-footer.png'
import DarkMode from '../../components/DarkMode'

function Contact() {
     const year = new Date().getFullYear();
  return (
    <>
      <Navbar></Navbar>
      <DarkMode></DarkMode>
      <div className='Contact-Container'>
          <div className="title">
               <p>İLETİŞİM</p>
               <div className='contact-border'></div>
          </div>
          <form action="https://formspree.io/f/xyyrkzwq" method="post">
               <div>
                    <label htmlFor="name">İsim</label>
                    <input type="text" id="name" name="name" placeholder='Giriniz...'/>
               </div>
               <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='Giriniz...'/>
               </div>
               <div>
                    <label htmlFor="text">Mesajınız</label>
                    <textarea name="text" id="text" cols="70" rows="10" placeholder='Giriniz...'></textarea>
               </div>
               <button type="submit">Gönder</button>
          </form>
          <footer>
               <div className='second1'>
                    <p className='motivation'>“ İyileşiyorum, Güçleniyorum, Gelişiyorum ”</p>
                    <div className='social-media'>
                         <p>SOCİAL</p>
                         <div className="social-media-icon">
                              <img src={youtube} alt="youtube" />
                              <a href='https://www.instagram.com/warring.coder?utm_source=qr&igsh=bzBpcmV2NzhmMXVp' target="_blank" rel="noopener noreferrer">
                                   <img src={instagram} alt="instagram" />
                              </a>
                               <a 
                                   href='https://www.linkedin.com/in/ishak-eren?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer"
                              >
                              <img src={linkedin} alt="linkedin" />
                              </a>
                              <a href='https://github.com/WarringCoder' target="_blank" rel="noopener noreferrer">
                                   <img src={github} alt="github" />
                              </a>
                         </div>
                    </div>
               </div>
               <div className='footer-border'></div>
               <div className="producer">
                   <p>&copy; Copyright {year}.  <span>Made by İshak Eren</span> </p>
               </div>
          </footer>
      </div>
    </>
  )
}

export default Contact