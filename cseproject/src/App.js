import React from 'react';
import Login from './Login/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Signup/Signup';
import Front from './Front/Front';
import Imran from './Imran';
import Page from './About/Page';

function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Front/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/app' element={<Imran/>}></Route>
        <Route path='/about'element={<Page/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;