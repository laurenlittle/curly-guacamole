import React from 'react';
// import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {

  const getCurrentYear = () => {
    let date = new Date();
    return date.getFullYear();
  }

  return(
    <footer className="footer">
      <p className="footer-copyright">
        &copy; {getCurrentYear()} Lauren Suero
      </p>
    </footer>
  )
}

export default Footer;