import React from 'react';
import './StagesMobile.scss';
import { stagesCard } from '../../utils/constants';


function StagesMobile(){

  const searchIndex = (e) => {
    const parentId = e.target.parentElement.id;
    let index = 0;
    if(parentId){
      index = Number(parentId)
    } else{
      index = Number(e.target.parentElement.parentElement.id);
    }
    return index - 1;
  }

  const clickHandler = (e) =>{ 
    const listItem = document.querySelectorAll('.stages-mobile__item');
    const listName = document.querySelectorAll('.stages-mobile__name');
    const listIndex = document.querySelectorAll('.stages-mobile__index');
    const listPlus = document.querySelectorAll('.stages-mobile__plus');
    if(listItem[searchIndex(e)].children[1].classList.contains('stages-mobile__show_active')){
      listItem[searchIndex(e)].children[1].classList.remove('stages-mobile__show_active');
      listName[searchIndex(e)].classList.remove('stages-mobile__name_active');
      listIndex[searchIndex(e)].classList.remove('stages-mobile__index_active');
      listPlus[searchIndex(e)].classList.remove('stages-mobile__plus_rotate');
    } else{
      showDisable();
      listItem[searchIndex(e)].children[1].classList.add('stages-mobile__show_active');
      listName[searchIndex(e)].classList.add('stages-mobile__name_active');
      listIndex[searchIndex(e)].classList.add('stages-mobile__index_active');
      listPlus[searchIndex(e)].classList.add('stages-mobile__plus_rotate');
    }
    
  }

  const showDisable = () => {
    const listShow = document.querySelectorAll('.stages-mobile__show');
    const listName = document.querySelectorAll('.stages-mobile__name');
    const listIndex = document.querySelectorAll('.stages-mobile__index');
    const listPlus = document.querySelectorAll('.stages-mobile__plus');
    for(let i = 0; i < listShow.length; i++){
      listName[i].classList.remove('stages-mobile__name_active');
      listShow[i].classList.remove('stages-mobile__show_active');
      listIndex[i].classList.remove('stages-mobile__index_active');
      listPlus[i].classList.remove('stages-mobile__plus_rotate');
    }
  }

  return(
    <section className="stages-mobile content__stages-mobile">
      <h2 className="stages-mobile__title">Основные этапы подготовки:</h2>
      <ul className="stages-mobile__list">
            {
            stagesCard.map(({ id, title, subtitle, image }) => {
              return(
                <li className="stages-mobile__item" id={id} key={id}>
                  <button className="stages-mobile__button" onClick={clickHandler} id={id}>
                    <div className="stages-mobile__name">
                      <p className="stages-mobile__index">{id}</p>
                      { title }
                    </div>
                    <div className="stages-mobile__sign">
                      <div className="stages-mobile__minus"></div>
                      <div className="stages-mobile__plus"></div>
                    </div>
                  </button>
                  <div className="stages-mobile__show">
                    <p className="stages-mobile__text">{subtitle}</p>
                    <img className="stages-mobile__img" src={image} alt={title}/>
                  </div>
                </li>
              );
            })
            }
      </ul>
    </section>
  )
}

export default StagesMobile;