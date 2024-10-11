import React from 'react';
import CourseArr from "../../../assets/pajamas_arrow-up.png"
import { NavLink } from 'react-router-dom';

function Courseitem(props) {

  const back = {
    backgroundImage: `url(${props.back})`
  }
  return (
    <NavLink to={`/course/${props.id}`}>
      <div className="course__item" style={back} >
        <div className="course__content">
          <h2 className="course__title">{props.title}</h2>
          <img src={CourseArr} alt="" className="course__arroy" />
        </div>
      </div>
  </NavLink>
  );
}

export default Courseitem;