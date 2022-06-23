// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from 'bootstrap';


// import React, { Component } from 'react'
// import { button } from 'react-native'


// import ScriptTag from 'react-script-tag';



function App() {


//   const Test = () => {
//     return(
        
        
//         <button>click here</button>
              
//     )
// }
// let prasanth = Test();


  function walkingSteps(dailySteps, daysWalked){

    let stepCount = 50;
    
    return function steps(){

      stepCount= stepCount+(dailySteps*daysWalked);
      return stepCount;
    
    }
  }

  let days= Math.floor((Math.random() * 100) + 1);

const totalSteps = walkingSteps(100,days)

let b = totalSteps();



let d =new Date()
const h=d.getHours()
let m=d.getMinutes()
let s=d.getSeconds()
const m1=m/60
const s1=s/3600
const time=h+m1+s1;
let output;
if (time > 3 && time <= 9)
   output="Good Morning"
else if (time > 9 && time <= 15)
   output="Good Afternoon"
else if(time > 15 && time <= 21)
    output="Good Evening"
else
    output="Good Night"



function prasanth(){

   
    //  Math.floor((Math.random() * 100) + 1);

    alert("click happened");
  

}

// const lok = prasanth();

  return (

    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={process.env.PUBLIC_URL+"pra.jpg"}/>
        <p>
          Name : Prasanth <br></br>
          Mobile : 1234567890 <br></br>
          Email id : prasanth@gmail.com <br></br>
          Address : India <br></br>
          About me : Still a learner.
        </p>

       <button onClick={prasanth}> click  </button>

       {/* <h1> {lok}</h1> */}
        <h1>Hello! user {output}. The Time is {h}:{m} now </h1>
       
        <h1>Total Steps after {days} days is {b}</h1>

      </header>
    </div>
    
  );
}

export default App;
