import React from 'react';

import './About.scss';
import selfie from '../../../assets/images/work-me.jpg';

import HeadingText from '../../HeadingText/HeadingText';


function About() {
  return(
    <section className="about">
      <img className="about-img" src={selfie} alt="Lauren Suero" />
      <HeadingText className={'about-heading'} headingLevel={'h1'}>
        Hi there! My name is Lauren and I'm a Front End Developer.
      </HeadingText>

      <a href="/LaurenSuero-Resume.pdf" target="_blank" className="btn btn-outline">
        <svg> <rect x="0" y="0" fill="none" width="100%" height="100%"/> </svg>
        Resume
      </a>

    </section>
  )
}

export default About;