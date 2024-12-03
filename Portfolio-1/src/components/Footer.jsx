import React from 'react';
import '../style/footer.css';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
<assets />

function Footer() {
  return (
    <footer class ="footer">
      <ul>
   <li> <a href="stephanyxpal@website.com"><img src = {gmail} alt = "gmail" width="30"></img></a> </li>
   <li> <a href="https://github.com/stephanyxpal"><img src = {github} alt = "gmail" width="30"></img></a> </li>
   <li> <a href="https://www.linkedin.com/in/stephany-p-60ab65130/"><img src = {linkedin} alt = "gmail" width="30"></img></a> </li>
    </ul></footer>
  )
}

export default Footer