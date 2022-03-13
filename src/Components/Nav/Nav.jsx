import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Nav = () => {
  return (
    <nav className='Nav'>
      <span className='Name'>Matt Wilson</span>
      <div className='Social-Links-Container'>
        <NavLink to='https://www.facebook.com/MattWilsonDPT/'>
          <SocialIcon url='https://www.facebook.com/MattWilsonDPT/' />
        </NavLink>
        <NavLink to='https://twitter.com/matt_willsonDPT'>
          <SocialIcon url='https://twitter.com/matt_willsonDPT' />
        </NavLink>
        <NavLink to='https://www.linkedin.com/in/mattwilsondpt/'>
          <SocialIcon url='https://www.linkedin.com/in/mattwilsondpt/' />
        </NavLink>
        <NavLink to='https://github.com/Mattwwilson34'>
          <SocialIcon url='https://github.com/Mattwwilson34' />
        </NavLink>
        <NavLink to='mailto:mattwwilson34@gmail.com'>
          <SocialIcon url='mailto:mattwwilson34@gmail.com' />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
