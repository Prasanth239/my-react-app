import React from "react";

const SignIn = () => {
  return (
    <div
      style={{
        background: "#669999",
        display: "block",
        justifyContent: "center",
        textAlign: "center",
        height: "90vh",
        padding: "40px",
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
          type="email"
          id="email"
          placeholder="Enter Username / e-mail"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />
        <input
          type="password"
          id="pword"
          placeholder="Enter your password"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />
        <input
          type="button"
          onClick={SignIn}
          style={{ width: "100px", borderRadius: "5px" }}
          defaultValue="Sign In"
        />
      </div>
    </div>
  );
};

export default SignIn;
