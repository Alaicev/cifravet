import React from 'react';
import Logo from "../../assets/Logo.png" 
import {NavLink} from "react-router-dom"
import "./Header.css"
import Profile from './Profile';

function Header(props) {

  const handleClose = () => {
    props.fun(true)
  }


  const user = props.user.items

  console.log(user)

  return (
    <div className='header'>
      
      <div className="wrapper">
        <div className="header__container">
          <nav className="header__nav">
            <img src={Logo} alt="" className="header__logo" />
            <NavLink to="/" className={ a => a.isActive? "header__link-activity" : "header__link"}>Главная</NavLink>
            <NavLink to="/course" className={ a => a.isActive? "header__link-activity" : "header__link"}>Курсы</NavLink>
            <NavLink to="/contacts" className={ a => a.isActive? "header__link-activity" : "header__link"}>Контакты</NavLink>
          </nav>
          {user.name && props.token ? <Profile name={user.name}/>: <p onClick={handleClose} className="button">Войти</p> }
          
        </div>
      </div>
    </div>
  );
}

export default Header;