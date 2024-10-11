import React from 'react';
import "./Header.css"
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../store/User';

function Login(props) {

  const [login, setLogin] = React.useState("")
  const [Password, setPassword] = React.useState("")
  const dispatch = useDispatch()

  const handleClose = () => {
    props.fun(false)
  }


  const handleSubmit = () => {
    const data = {
      email: login,
      password : Password
    }
    dispatch(LoginUser(data))
    handleClose()
  }
  return (
    <div className='login'>
      <div className="close__container " onClick={handleClose}>
        <button className='close' ></button>
      </div>
      <div className="login__form">
        <h2 className="login__title">
          Авторизация
        </h2>
        <input type="text" placeholder='Email' value={login} onChange={(e) => setLogin(e.target.value)}/>
        <input type="text" placeholder='Password'value={Password} onChange={(e) => setPassword(e.target.value)}/>
        <p className="button login__button" onClick={handleSubmit}>Применить</p>
      </div>
    </div>
  );
}

export default Login;