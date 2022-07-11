import React from 'react';

const SignUp = () => {
return (
	<div
      style={{
      
        display: "block",
        justifyContent: "center",
        textAlign: "center",
        height: "90vh",
        padding: "30px",
      }}
    >
      <div
        style={{
        
          display: "block",
          justifyContent: "center",
          textAlign: "center",
          padding: "150px",
        }}
      >
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />

		<input
          type="date"
          id="dob"
          placeholder="Select DOB"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />

		<input
          type="tel"
          id="mobile"
          placeholder="Enter Mobile"
          style={{ marginBottom: "10px", width: "250px", borderRadius: "5px" }}
        />
        <br />

		<input
          type="email"
          id="email"
          placeholder="Enter e-mail"
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

		<p><label><input
          type="checkbox"
          id="box"
         value=''
          style={{ marginBottom: "10px", }}
        />
		I agree to Terms & Conditions </label></p>
        
		

        <input
          type="button"
          onClick={SignUp}
          style={{ width: "100px", borderRadius: "5px" }}
          defaultValue="Sign Up"
        />

        
      </div>
    </div>
);
};

export default SignUp;
