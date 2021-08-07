
import './App.css';
import React, {useState, useEffect} from 'react';
import Track1 from './components/Track1.js'
import Track2 from './components/Track2.js'
import Track3 from './components/Track3.js'
import Track4 from './components/Track4.js'
import Track5 from './components/Track5.js'
import Track6 from './components/Track6.js'
import About from './components/About.js'
import Title from './components/Title.js'
import Spotify from './components/Spotify.js'
import Logo from '/Users/jackypan/musicplayer/src/hard-stage.gif'

function App() {


  const [theme, setTheme] = useState(false);
  const [color, setColor] =useState('black');
  const [Background, setBackground] = useState('');

  function ChangeTheme(theme) {
    if (theme) {
      setTheme(!theme);
      setColor('black')
      setBackground(`linear-gradient(#e66465, #9198e5)`)
    } else {
      setColor('white')
      setBackground(`linear-gradient( rgba(2,0,36,1) 0%, rgba(149,36,181,1) 91%, rgba(254,191,255,1) 100%)`)
    }
  }

  return (
    <div className='main' style={{ background: `${Background}`, color: `${color}` }}>
      <About    />
      <button className='main-bttn' onClick={() => {setTheme(!theme); ChangeTheme(theme)} } > Dark Mode </button>


    <div className='main-container'>
    <div className='main-container-item'  > <Title />  <Spotify />  </div>
    <img className='main-container-item' id='main-logo' src={Logo}  />

    <div  className='main-container-item'>
    <Track1  />
    <Track2  />
    <Track3  />
    <Track4  />
    <Track5  />
    <Track6  />
    </div >
    </div>

    </div>

  )
}

export default App;
