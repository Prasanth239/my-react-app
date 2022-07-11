
import React, { useState } from "react";

const Step = () => {
  const initialSteps = 500;
  const dailySteps = 100;

  const [days, setDays] = useState(0);

  function randomDay() {
    setDays(Math.floor(Math.random() * 367));
  }

  const totalSteps = days * dailySteps + initialSteps;

  return (
    <div
      style={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      
      <h5>
        If user walks <span>{dailySteps} </span>steps daily and initially steps
        were<span> {initialSteps} </span>then, 
      </h5>
      <br></br>

      <button onClick={randomDay} class="btn btn-danger btn-lg">
      👉 Click here for Total Steps 👈
      </button>
      <br></br>
     <h5>Total steps after<span> {days}</span> days is steps <span>{totalSteps} </span> </h5> 
    </div>
  );
};
export default Step;
