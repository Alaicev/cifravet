import React from 'react';
import Intro from "./intro/Intro"
import Info from "./info/Info"
import Contacts from "./contacts/Contacts"

function About(props) {
  return (
    <div>
      <Intro />
      <Info />
      <Contacts />
    </div>
  );
}

export default About;