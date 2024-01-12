import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// pages
import Hi from './pages/Hi/Hi';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Hi/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
