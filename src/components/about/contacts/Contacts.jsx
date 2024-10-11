import React from 'react';
import "./Contacts.css"

function Contacts(props) {
  return (
    <div className='contacts'>
      <div className="title-container ">
        <div className="wrapper">
          <h2 className="title">
          Контакты
          </h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="contacts__container">
          <div className="contacts__text-container">
            <p className="contacts__title">
            Образовательная организация 
            </p>
            <p className="contacts__text">
            Федеральное государственное бюджетное образовательное учреждение высшего образования «Саратовский государственный университет генетики, биотехнологии и инженерии имени Н.И. Вавилова» (ФГБОУ ВО Вавиловский университет)
            </p>
          </div>
          <div className="contacts__text-container">
            <p className="contacts__title">
            Юридический адрес
            </p>
            <p className="contacts__text">
            410012, г. Саратов, пр-кт им. Петра Столыпина зд. 4, стр. 3.
            </p>
          </div>
          <div className="contacts__text-container">
            <p className="contacts__title">
            Электронная почта
            </p>
            <p className="contacts__text">
            rector@vavilovsar.ru
            </p>
          </div>
          <div className="contacts__text-container">
            <p className="contacts__title">
            Телефоны
            </p>
            <p className="contacts__text">
            +7 (8452) 23-32-92   +7 (9878) 00-26-70
            </p>
          </div>
          <div className="contacts__text-container">
            <p className="contacts__title">
            Факс
            </p>
            <p className="contacts__text">
            8 (8452) 23-47-81
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;