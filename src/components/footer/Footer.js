import React from 'react';
import './Footer.scss';
import inst from './images/inst.svg';
import teleg from './images/teleg.svg';

function Footer(){
  return(
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© 2021 | Все права защищены</p>
        <div className="footer__info">
          <a className="footer__link" href="#">sozdanie@mail.ru</a>
          <a className="footer__social" href="https://t.me/EugeneBelovv">
            <img className="footer__icon" src={teleg} alt="Телеграм"/>
          </a>
          <a className="footer__social" href="https://www.instagram.com/eug_ene.belov/">
            <img className="footer__icon" src={inst} alt="Instagram"/>
          </a>
        </div>
      </div>
      <div className="footer__container footer__container_mobile">
        <p className="footer__copyright footer__copyright_mobile">© 2021 | Все права защищены</p>
      </div>
    </footer>
  )
}

export default Footer;