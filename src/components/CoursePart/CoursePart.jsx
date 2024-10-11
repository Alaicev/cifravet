import React from 'react';
import { NavLink } from 'react-router-dom';
import "./CoursePart.css"

function CoursePart(props) {
  return (
    <div className='course__part'>
      <div className="wrapper">
        <h2 className="course__part-title">Для просмотра необходима авторизация</h2>
      </div>
    </div>
  );
}

export default CoursePart;