import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Nav = () => {
  return (
    <nav className='Nav'>
      <span className='Name'>Matt Wilson</span>
      <div className='Social-Links-Container'>
        <NavLink to='#'>
          <SocialIcon url='https://www.facebook.com/MattWilsonDPT/' />
        </NavLink>
        <NavLink to='#'>
          <SocialIcon url='https://twitter.com/matt_willsonDPT' />
        </NavLink>
        <NavLink to='#'>
          <SocialIcon url='https://www.linkedin.com/in/mattwilsondpt/' />
        </NavLink>
        <NavLink to='#'>
          <SocialIcon url='https://github.com/Mattwwilson34' />
        </NavLink>
        <NavLink to='#'>
          <SocialIcon url='mailto:mattwwilson34@gmail.com' />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
