import React from 'react';
import './Card.scss';

import HeadingText from '../HeadingText/HeadingText';

function Card({content,  ...props}) {
  const {headingLevel, className, headingText, cardNumber, images} = props;

  return(
    <div className={`card ${className}`}>
      <HeadingText className={'card-number'} headingLevel={headingLevel} children={cardNumber}/>
      <HeadingText className={'card-title'} headingLevel={headingLevel} children={headingText}/>
      <div className="card-content">
        {content}

        <div className="card-images">
          { !!images ?
              images.map(image => {
                return (
                <a key={image.class} href={image.link} target="_blank" rel="noreferrer">
                  <img src={image.src} className={image.class} loading="lazy" alt={image.alt} />
                </a>
                )
              })
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default Card;