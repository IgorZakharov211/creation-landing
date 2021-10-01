import React from 'react';
import './Footer.scss';

function Footer(){
  return(
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© 2021 | Все права защищены</p>
        <div className="footer__info">
          <a className="footer__link" href="#">sozdanie@mail.ru</a>
          <a className="footer__social">
            <img className="footer__icon" />
          </a>
          <a className="footer__social">
            <img className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;