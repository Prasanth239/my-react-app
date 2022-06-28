// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './Pages/about';
import Events from './Pages/events';
import AnnualReport from './Pages/annual';
import Teams from './Pages/team';
import Blogs from './Pages/blogs';
import SignUp from './Pages/signup';



function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Route exact path='/about' component={About}/>
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
    </BrowserRouter>
    </>
    
  );
}

export default App;
