import React ,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Sidebars from './components/login/dashboard/Sidebars';

function App() {
  return (
   <>
   {/* <Login/> */}
     < BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/>} />
          <Route path='/sidebars' element={ <Sidebars/>} />
        </Routes>
     
     </ BrowserRouter>
   </>
  );
}

export default App;
