import React from "react";

const Step = () => {
  function walkingSteps(dailySteps, daysWalked) {
    let stepCount = 50;

    return function steps() {
      stepCount = stepCount + dailySteps * daysWalked;
      return stepCount;
    };
  }

  let days = Math.floor(Math.random() * 10 + 1);

  const totalSteps = walkingSteps(100, days);

  totalSteps();
  function out() {
    document.getElementById("result").innerHTML = totalSteps();
  }

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
      <input type="button" onClick={out} value="Click here for Total Steps" />
      <p>
        total steps after {days} days is <span id="result"></span>steps
      </p>
    </div>
  );
};
export default Step;
