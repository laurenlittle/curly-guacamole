import React from 'react';

import './Button.scss';

function Button ({className, text, type, children}) {

  return(
    <button className={`btn ${className}`} type={type}>
      {text}
      {children}
    </button>
  )
};

export default Button;