import { Button } from "reactstrap";
import React,{useState} from "react";

const Step = () => {

const initialSteps = 1
const dailySteps=100

const [days, setDays] = useState(initialSteps)

function randomDay(){ 
setDays(Math.floor(Math.random()*367))
}

const totalSteps = (days*dailySteps)+ initialSteps;

  return (
    <div
      style={{
        background: "#669999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      
      <Button onClick={randomDay} class="btn btn-primary btn-lg" >Click here for Total Steps</Button>
      <h6>
        Total steps after <span> {days} </span> days is steps<span> {totalSteps} </span>  
      </h6>
    </div>
  );
};
export default Step;
