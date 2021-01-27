import React from 'react';

function Mailto ({ email, subject = '', children }) {
  return (
    <a href={`mailto:${email}?subject=${subject}`} className="mailto-link">{children}</a>
  );
};

export default Mailto;