import React from 'react';
import './Stages.scss';
import firstImg from './images/items/firstImg.jpg';

function Stages(){
  return(
    <section className="stages content__stages">
      <div className="stages__preview">
        <h2 className="stages__title">Основные этапы подготовки:</h2>
        <ol className="stages__list" type="1">
          <li className="stages__item stages__item_active">
            <button className="stages__button stages__button_active">Знакомство</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Заключение договора</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Обсуждение сценария</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Проработка концепции</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Юридическое сопровождение</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Работа с площадкой</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Подбор команды</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Организационные вопросы</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Разработка тайминга</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Координация мероприятия</button>
          </li>
          <li className="stages__item">
            <button className="stages__button">Контроль</button>
          </li>
        </ol>
      </div>
      <div className="stages__window">
        <div className="stages__image-border">
          <img className="stages__image" alt="Знакомство" src={firstImg}/>
        </div>
        <h3 className="stages__title stages__title_span">Знакомство</h3>
        <p className="stages__subtitle">Знакомство, сбор потребностей и пожеланий, 
        первичные предложения по сценарию, концепции.</p>
      </div>
    </section>
  )
}

export default Stages;