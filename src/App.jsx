import React, { useEffect, useState } from 'react';
import File from '../src/components/file/file'
import Text from './TextForm/index'
import TodoApp from './todoapp/app'
import Api from './components/api/api'
import Login from "./utilities/loginWithFirebase/index"
import Header from './components/Header/header';
import Aboutus from './components/Aboutus/about'
import Alert from './components/Alert/alert';
import News from './components/newsapi';
import Data from './components/newsapi/location';
import Calculator from './components/calculator';
import Profile from './components/profile/profile';
import ChangeColor from './components/newsapi/changecolour';
import NotFound from './components/notFound'
// import LOGIN from './components/login/login'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = () => {
    console.log("Current mode:", mode);

    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = 'white';
      showAlert("Dark mode has been enable", "success");
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enable", "success");
    }
  }

  // const [user, setUser] = useState(false)
  // useEffect(() => {
  //   const isUser = localStorage.getItem("user")
  //   if (isUser) {
  //     setUser(true)
  //   }
  // }, [])
  return (
    <BrowserRouter>
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        {/* <Route path="/" element={<Header mode={mode} toggleMode={toggleMode} />} /> */}
        <Route path="/" element={<Text showAlert={showAlert} heading="Convert Lower case to Uppercase" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/api" element={<Api />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/file" element={<File />} />
        <Route path="/news" element={<News pageSize={5} key="General" country="us" category="General"/>} />
        <Route path="/Sports" element={<News pageSize={5} key="Sports" country="us" category="Sports"/>} />
        <Route path="/Technology" element={<News pageSize={5} key="Technology" country="us" category="Technology"/>} />
        <Route path="/Entertaiment" element={<News pageSize={5} key="Entertaiment" country="us" category="Entertaiment"/>} />
        <Route path="/Science" element={<News pageSize={5} key="Science" country="us" category="Science"/>} />
        <Route path="/Health" element={<News pageSize={5} key="Health" country="us" category="Health"/>} />
        <Route path="/data" element={<Data />} />
        <Route path="/cal" element={<Calculator />} />
        <Route path="/color" element={<ChangeColor />} />
        <Route path="/profile/:id/me" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/login" element={user ? <Navigate to={'/header'} /> : <LOGIN />} />
        <Route path="/header" element={user ? <Header /> : <Navigate to={'login'} />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
