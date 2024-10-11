import React from 'react';
import "./Course.css"
import Courseitem from './CourseItem/Courseitem';
import Course1 from "../../assets/Course1.png"
import Course2 from "../../assets/Course2.png"

function Course(props) {

  const state = [
    {
      title: "Осеменение КРС",
      back: Course1,
      id:1
    }, 
    {
      title: "Заболевания молочной железы КРС",
      back: Course2,
      id:2
    }
  ]

  return (
    <div className='course'>
      <div className="title-container">
        <div className="wrapper">
          <h2 className="title">
            Курсы
          </h2>
        </div>
      </div>
      <div className="couse__container">
        <div className="wrapper">
          <h2 className="course__title">
          ВетЦифра
          </h2>
          <div className="course__items">
            <Courseitem title={state[0].title} back={state[0].back} id={state[0].id}/>
            <Courseitem title={state[1].title} back={state[1].back} id={state[1].id}/>
          </div>

          {/* TODO: items  */}

        </div>
      </div>
    </div>
  );
}

export default Course;