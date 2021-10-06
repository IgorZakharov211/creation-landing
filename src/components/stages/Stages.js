import React, { useState, useEffect } from 'react';
import './Stages.scss';
import { stagesCard } from '../../utils/constants';

function Stages(){
  const [stageNumber, setStageNumber] = useState(1);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState('');

  function changeInfo(){
    let itemNumber = stageNumber - 1;
    setTitle(stagesCard[itemNumber].title);
    setSubtitle(stagesCard[itemNumber].subtitle);
    setImage(stagesCard[itemNumber].image);
  }

  const removeClasses = (e) => {
    const childrenItem = e.target.parentElement.parentElement.children;
    const count = childrenItem.length;
    for(let i = 0; i< count; i++){
      childrenItem[i].classList.remove("stages__item_active");
      childrenItem[i].children[0].classList.remove("stages__button_active")
    }
  }
  
  const clickHandler = (e) =>{
    setStageNumber(Number(e.target.parentElement.id));
    removeClasses(e);
    e.target.parentElement.classList.add("stages__item_active");
    e.target.classList.add("stages__button_active");
  }


  useEffect(() => {changeInfo()}, [stageNumber])
  
  return(
    <section className="stages content__stages">
      <div className="stages__preview">
        <h2 className="stages__title">Основные этапы подготовки:</h2>
        <ol className="stages__list" type="1">
          {
            stagesCard.map(({id, title}) => {
              if(id === 1){
                return(
                  <li className="stages__item stages__item_active" key={id} id={id}>
                    <button className="stages__button stages__button_active" onClick={clickHandler} id={id}>{title}</button>
                  </li>
                )
              }
              return(
                <li className="stages__item" key={id} id={id}>
                  <button className="stages__button" onClick={clickHandler} id={id}>{title}</button>
                </li>
              );
            })
          }
        </ol>
      </div>
      <div className="stages__window">
        <div className="stages__image-border">
          <img className="stages__image" src={image} alt={title}/>
        </div>
        <div className="stages__star"></div>
        <h3 className="stages__title stages__title_span">{title}</h3>
        <p className="stages__subtitle">{subtitle}</p>
      </div>
    </section>
  )
}

export default Stages;