import React from 'react';
import './HeadingText.scss';

function HeadingText({ headingLevel, className, children}) {

  const Title = headingLevel;

  return(
    <Title className={`heading-text ${className}`}>
      {children}
    </Title>
  )
}

export default HeadingText;