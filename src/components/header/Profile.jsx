import React from 'react';
import "./Header.css"

function Profile(props) {

  const out = () => {
    localStorage.removeItem("token")
  }

  return (
    <div className='propfile__container'>
      <p className='profile__name'>{props.name}</p>
      <div className="profile__menu" onClick={out}></div>
    </div>
  );
}

export default Profile;