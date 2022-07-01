import React from "react";

const Bill = () => {
  function divideBy() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    let b = num1 / num2;
    document.getElementById("result").innerHTML = b.toFixed(2);
  }

  return (
    <div
      style={{
        background: "#669999",
        display: "block",
        justifyContent: "center",
        textAlign: "center",
        height: "90vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          background: "#669999",
          display: "block",
          justifyContent: "center",
          textAlign: "center",
          padding: "150px",
        }}
      >
        <input
          type="text"
          id="firstNumber"
          placeholder="Total Bill Value"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />
        <input
          type="text"
          id="secondNumber"
          placeholder="No. of People"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />

        <input
          type="button"
          onClick={divideBy}
          style={{ marginBottom: "30px", width: "100px", borderRadius: "5px" }}
          defaultValue="Split"
        />

        <h1>
          <p>
            Each Person has to Pay :<span id="result" />
            /-
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Bill;
