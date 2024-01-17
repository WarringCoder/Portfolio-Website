import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



// pages
import Hi from './pages/Hi/Hi';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import LifeCycle from './pages/LifeCycle/LifeCycle';
import Contact from './pages/Contact/Contact';
import Certificate from './pages/Certificate/Certificate';




function App() {
  return (
    <BrowserRouter>
      <div className='Full-Container'>
        <Routes>
          <Route path='/' element={<Hi/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/lifeCycle' element={<LifeCycle />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Routes>
          <Route path='/about/certificate' element={<Certificate/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
