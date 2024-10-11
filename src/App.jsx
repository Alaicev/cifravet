import React from 'react';
import "./App.css";
import About from "./components/about/About";
import Course from "./components/course/Course"
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/header/Login";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './store/User';
import ContactsApp from './components/Contacts/ContactsApp';
import CoursePart from './components/CoursePart/CoursePart';

function App() {
  const dispatch = useDispatch()
  const [status, setStaus] = React.useState(false)
  const user = useSelector((state) => state.User.User.UserData)
  const token = localStorage.getItem("token")

  const openLogin = (val) => {
    setStaus(val)
  }

  React.useEffect(() => {
    dispatch(getUser(token))
  }, [token, dispatch])


    if (status) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }


  return (
   <div>
    <BrowserRouter basename='cifravet'>
      {status ? <Login fun={openLogin}/> : null}
      <Header  fun={openLogin} token={token} user={user}/>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/course" element={<Course />}/>
        <Route path="/contacts" element={<ContactsApp />}/>
        <Route path="/course/:id" element={<CoursePart />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
   </div>
  );
}

export default App;
