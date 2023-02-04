
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import React, { useState } from 'react';

function App() {
  const [mode, setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#495057';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar logo="TextUtils" mode={mode} togglemode={togglemode} ></Navbar>
      <Form heading="Enter Your Text" mode={mode}></Form>
    </>
  );
}
export default App;