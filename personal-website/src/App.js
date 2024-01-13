import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'


// pages
import Hi from './pages/Hi/Hi';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import LifeCycle from './pages/LifeCycle/LifeCycle';
import Contact from './pages/Contact/Contact';




function App() {
  return (
    <BrowserRouter>
      <div className='Full-Container'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Hi/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/lifeCycle' element={<LifeCycle />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
