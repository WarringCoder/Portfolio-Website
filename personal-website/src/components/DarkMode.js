// DarkMode.js
import './DarkMode.css';
import night from '../images/Night.png';
import sun from '../images/moon.png'

function DarkMode({ darkMode, setDarkMode}) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div onClick={toggleDarkMode} className={`Dark-Mode-Night ${darkMode ? 'dark-mode-night' : ''}`}>
      {darkMode ? '' : ''}
      <img src={darkMode ? sun : night} alt="night" />
    </div>
  );
}

export default DarkMode;
