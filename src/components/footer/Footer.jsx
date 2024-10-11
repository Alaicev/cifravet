import React from 'react';
import "./Footer.css"
import {NavLink} from "react-router-dom"

function Footer(props) {
  return (
    <div className='footer'>
      <div className="wrapper">
        <div className="footer__container">
          <h2 className='footer__title'>ВетЦифра</h2>
          <div className="line"></div>
          <nav className='Footer__nav'>
            <NavLink to="/" className={ a => a.isActive? "header__link-activity" : "header__link"}>Главная</NavLink>
            <NavLink to="/course" className={ a => a.isActive? "header__link-activity" : "header__link"}>Курсы</NavLink>
            <NavLink to="/contacts" className={ a => a.isActive? "header__link-activity" : "header__link"}>Контакты</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;