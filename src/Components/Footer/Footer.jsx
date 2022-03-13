import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
      <Link to='https://www.facebook.com/MattWilsonDPT/'>Facebook</Link>
      <Link to='https://twitter.com/matt_willsonDPT'>Twitter</Link>
      <Link to='https://www.linkedin.com/in/mattwilsondpt/'>LinkedIn</Link>
      <Link to='https://github.com/Mattwwilson34'>GitHub</Link>
      <Link to='mailto:mattwwilson34@gmail.com'>Email Me</Link>
    </div>
  );
};

export default Footer;
