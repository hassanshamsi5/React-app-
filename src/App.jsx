// import React from 'react';
import React, { useState } from 'react';
import File from '../src/components/file/file'
import Text from './TextForm/index'
import TodoApp from './todoapp/app'
import Api from './components/api/api'
import Login from "./utilities/loginWithFirebase/index"
import Header from './components/Header/header';
import Aboutus from './components/Aboutus/about'
import Alert from './components/Alert/alert';
import {BrowserRouter,Route,Routes,} from "react-router-dom";

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
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enable", "success")
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <BrowserRouter>
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Text showAlert={showAlert} heading="Convert Lower case to Uppercase" />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/api" element={<Api />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/file" element={<File />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;