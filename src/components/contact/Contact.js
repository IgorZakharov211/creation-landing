import React from 'react';
import './Contact.scss';

function Contact(){
  return(
    <section className="contact content__contact">
      <div className="contact__info">
        <h2 className="contact__title">Стоимость услуги</h2>
        <p className="contact__subtitle">от 500 000 рублей.</p>
        <form className="contact__form">
          <fieldset className="contact__fieldset">
            <label className="contact__label">
              <input className="contact__input"
              type="phone"
              name="tel"
              placeholder="+7 (___) ___ __-__"
              required 
              id="telephone" 
              minLength="2" 
              maxLength="10"
              ></input>
              <span className="contact__span">Введите корректный номер телефона</span>
            </label>
            <button className="contact__button" type="submit">Заказать звонок</button>
          </fieldset>
        </form>
      </div>
      <div className="contact__vektor-container">
        <div className="contact__vektor_left"></div>
        <div className="contact__vektor_right"></div>
      </div>
    </section>
  )
}

export default Contact;