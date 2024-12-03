import React from 'react'
import Profile from '../assets/Profilepic.jpg';
import '../style/about.css';


function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={Profile} alt="profile" width ="150" heigth="150" className='pimage' />
      <p>
        I am a full stack developer with experience in React, HTML, JavaScript, and Node.js. I am looking to build applications and for opportunities to expand my knowledge. 
        I am a full stack developer with experience in React, HTML, JavaScript, and Node.js. I am looking to build applications and for opportunities to expand my knowledge. 
        I am a full stack developer with experience in React, HTML, JavaScript, and Node.js. I am looking to build applications and for opportunities to expand my knowledge. 
       
         </p>
    </div>
  )
}

export default About;