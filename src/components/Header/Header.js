import React from 'react';
import { Link } from 'react-router-dom';
import Mailto from '../Mailto/Mailto';
import './Header.scss';

function Header() {
  return(
    <header className="header">
      <Link className="nav-item" to="/" >
        <span className="nav-item-text">LS </span>
      </Link>

      <Mailto email="suerolauren3@gmail.com" subject="Virtual Coffee?">
        Contact
      </Mailto>

    </header>
  )
}

export default Header;