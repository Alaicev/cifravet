import React from 'react';
import  "./Info.css"
import item1 from "../../../assets/item-1.png"
import item2 from "../../../assets/item-2.png"
import item3 from "../../../assets/item-3.png"
import item4 from "../../../assets/item-4.png"

function Info(props) {
  return (
    <div className='info'>
      <div className="title-container">
        <div className="wrapper">
          <h2 className="title">
          Доступные<br />для обучения технологии
          </h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="info__items">

          {/* TODO: Поменять на ссылки */}

          <div className="info__item">
            <img src={item1} alt="" />
            <p className="item__text">Видео-лекции</p>
          </div>
          <div className="info__item">
            <img src={item2} alt="" />
            <p className="item__text">Интерактивные презентации</p>
          </div>
          <div className="info__item">
            <img src={item3} alt="" />
            <p className="item__text">VR-тренажеры</p>
          </div>
          <div className="info__item">
            <img src={item4} alt="" />
            <p className="item__text">Тестирование</p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Info;