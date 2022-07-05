import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navb from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Pages';
import About from './Pages/about';
import Step from './Pages/step';
import Home from './Pages/home';
import Bill from './Pages/bill';
import Teams from './Pages/team';
import SignUp from './Pages/signup';
import SignIn from './Pages/signin';
import Air from './Pages/Airbnb/airbnb';
import Meme from './Pages/Meme/meme';


export default function App() {

  return (
    <>
    <BrowserRouter>
      <Navb />
      <Route path='/' exact component={Index} />
      <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/step' component={Step} />
        <Route path='/bill' component={Bill} />
        <Route path='/team' component={Teams} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/airbnb' component={Air}/>
        <Route path='/meme' component={Meme}/>
    </BrowserRouter>
    </>
    
  );
}

