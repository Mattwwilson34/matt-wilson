import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Nav = () => {
  return (
    <nav className='Nav'>
      <span className='Name'>Matt Wilson</span>
      <div className='Social-Links-Container'>
        <SocialIcon url='https://www.facebook.com/MattWilsonDPT/' />
        <SocialIcon url='https://twitter.com/matt_willsonDPT' />
        <SocialIcon url='https://www.linkedin.com/in/mattwilsondpt/' />
        <SocialIcon url='https://github.com/Mattwwilson34' />
        <SocialIcon url='mailto:mattwwilson34@gmail.com' />
      </div>
    </nav>
  );
};

export default Nav;
