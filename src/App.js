
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './Pages/about';
import Step from './Pages/step';
import Home from './Pages/home';
import Bill from './Pages/bill';
import Teams from './Pages/team';
import SignUp from './Pages/signup';






export default function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Route path='/about' component={About} />
        <Route path='/step' component={Step} />
        <Route path='/home' component={Home} />
        <Route path='/team' component={Teams} />
        <Route path='/bill' component={Bill} />
        <Route path='/sign-up' component={SignUp} />
    </BrowserRouter>
    </>
    
  );
}

