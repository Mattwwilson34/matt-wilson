import './HeroImage.css';
import React from 'react';
import Headshot from '../../Images/Headshot.jpg';

const HeroImage = () => {
  return (
    <div className='Hero-Image-Container'>
      <img className='Hero-Image' src={Headshot} alt='Headshot'></img>
      <div className='Hero-Image-Stament-Container'>
        <p>
          Hi! My name is Matt and for as long as I can remember, I have been
          fascinated by technology, engineering, and understanding how things
          work.
        </p>
        <p>
          It was not until July of 2021, a decade later, that I would recognize
          with enough hard work, I could achieve my goal of becoming a software
          engineer and grant myself the power to build applications, projects,
          and products limited only by imagination.
        </p>
        <p>
          In August 2021 I began my journey, and I am beyond excited to see
          where it takes me!
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
