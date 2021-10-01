import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
      </div>
    </header>
  );
}

export default Header;