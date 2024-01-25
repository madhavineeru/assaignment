import { FaInstagramSquare ,FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import './index.css'

const Contact = () =>(
    <div className="contact-section">
<div className='social-links'>
<button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='#';
      }}
><FaInstagramSquare/></button>
<button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.linkedin.com/in/madhavi-neeruganti-82mr95/';
      }}
><FaLinkedin /></button>
<button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='#';
      }}
><TfiEmail/></button>
</div>
<p className="note">Copyright © 2024.  All rights reserved</p>
</div>
)
export default Contact