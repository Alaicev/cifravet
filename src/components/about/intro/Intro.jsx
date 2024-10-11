import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Intro.css"

function About(props) {
  return (
    <div  className='about'>
      <div className="wrapper">
        <div className="about__container">
          <h1 className="about__title">
          ВетЦифра - <br />
          текст о платформе
          </h1>
          <NavLink to="course" className="button about__button">Смотреть курсы</NavLink>
        </div>
      </div>
    </div>
  );
}

export default About;