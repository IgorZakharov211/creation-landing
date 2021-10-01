import React from 'react';
import './Logo.scss';
import LogoImage from './images/logo.svg';

function Logo(){
  return(
    <div className="logo header__logo">
      <img className="logo__image" 
        src={LogoImage} 
        alt="'Создание': wedding agency by Belov Evgeniy" />
    </div>
  )
}

export default Logo;