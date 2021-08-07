
import React, {useState} from 'react';
import '../styles/About.css'
import Modal from './Modal.js'

function About() {

  const [Display, setDisplay] = useState(false);

  function handleChange(Display) {
    if (Display === true) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  return (
    <div>
    <button className='about-me' onClick={()=> handleChange(Display)}>
      About Me
    </button>
    <Modal show={Display} close={handleChange}/>
    </div>

  )
}

export default About