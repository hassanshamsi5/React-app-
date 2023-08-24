// import React from 'react';
import React,{useState} from 'react';

// import File from '../src/components/file/file'
import Text from './TextForm/index'
// import TodoApp from './todoapp/app'
// import Api from './components/api/api'  
// import Login from "./utilities/loginWithFirebase/index"
import Header from './components/Header/header';
// import Aboutus from './components/Aboutus/about'
function App() {
const [mode, setmode] = useState('light')
 
const toggleMode = () =>{
  if (mode === 'light') {
    setmode('dark')
    document.body.style.backgroundColor = '#042743'
    document.body.style.color = 'white'
  }else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
}
  return (
    <>
  {/* <File/> */}
  {/* <Login/> */}
  {/* <Api/> */}
  {/* <Aboutus/> */}
  <Header mode={mode} toggleMode={toggleMode}/>
  <Text heading="Convert Lower case to Uppercase"/>
  {/* <TodoApp/> */}

    </>
  );
}

export default App;


  