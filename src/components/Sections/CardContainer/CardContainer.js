import React from 'react';

import './CardContainer.scss';
import Card from '../../Card/Card';

import eiLogo from '../../../assets/images/excel-impact-logo.png';
import bgLogo from '../../../assets/images/boats-group-logo.png';
import ruLogo from '../../../assets/images/rutgers-logo.svg';
import ihLogo from '../../../assets/images/ironhack-logo.svg';

function CardContainer() {

  const cards = [
    {
      cardNumber: '01',
      headingText: 'About Me',
      headingLevel: 'h2',
      className: 'about-me',
      content: "I love React and writing clean, accessible, performant code. When I'm not in front of the computer, I enjoy 🚴‍♀️ 🏊‍♀️  🏖️  🏀  ⚽. Available for a virtual coffee or beer? Let's connect!",
    },
    {
      cardNumber: '02',
      headingText: 'Work Experience',
      headingLevel: 'h2',
      className: 'work-experience',
      content: '',
      images: [
        {
          src: eiLogo,
          alt: 'Excel Impact Logo',
          class: 'ei-logo',
          link: 'https://www.excelimpact.com/'
        },
        {
          src: bgLogo,
          alt: 'Boats Group Logo',
          class: 'bg-logo',
          link: 'http://boatsgroup.com/'
        },
      ]
    },
    {
      cardNumber: '03',
      headingText: 'Projects',
      headingLevel: 'h2',
      className: 'projects',
      content: '',
    },
    {
      cardNumber: '04',
      headingText: "Proudly Attended",
      headingLevel: 'h2',
      className: 'attended',
      content: '',
      images: [
        {
          src: ruLogo,
          alt: 'Rutgers University',
          class: 'ru-logo',
          link: 'https://www.rutgers.edu/'
        },
        {
          src: ihLogo,
          alt: 'Ironhack',
          class: 'ih-logo',
          link: 'http://ironhack.com/'
        },
      ]
    }
  ]

  return(
    <section className="card-container">
      {cards.map(card => (
        <Card key={card.cardNumber} {...card} content={card.content} />
        )
      )}
    </section>
  )
}

export default CardContainer;