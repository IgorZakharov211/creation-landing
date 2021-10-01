import React from 'react';
import './Banner.scss';

function Banner() {
  return (
    <section className="banner content__banner">
      <div className="banner__container">
        <h2 className="banner__title">Праздник, о котором вы будете вспоминать 
          <span className="banner__span"> всю жизнь.</span>
        </h2>
        <div className="banner__line"></div>
        <p className="banner__subtitle">Гарантируем только положительные эмоции.</p>
        <button className="banner__button">Заказать сейчас</button>
      </div>
    </section>
  );
}

export default Banner;