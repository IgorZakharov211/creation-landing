import React from 'react';
import './Key.scss';

function Key(){
  return(
    <section className="key content__key">
      <h2 className="key__title">Организуем свадьбу
        <span className="key__span"> «</span>Под ключ<span className="key__span">» </span>
      </h2>
      <div className="key__list-container">
        <p className="key__subtitle">Мы понимаем всю важность этого события, видим, 
        сколько тревог оно вызывает у пары, поэтому подстраиваемся под ваш темперамент 
        и запросы, чтобы максимально избавить от волнения и головной боли.</p>
        <ul className="key__list">
          <li className="key__item">
            <p className="key__item-text">Работу только с проверенными подрядчиками, которые не подводят</p>
          </li>
          <li className="key__item">
            <p className="key__item-text">возможность учесть все пожелания молодоженов</p>
          </li>
          <li className="key__item">
            <p className="key__item-text">ответственность за результат и гарантию качества, прописанную в договоре</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Key;