import React from "react";

const Navb = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-primary bg-black">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="home">
              Home
            </a>
            <a class="nav-link" href="about">
              About Me
            </a>
            <a class="nav-link" href="step">
              Step Counter
            </a>
            <a class="nav-link" href="bill">
              Split Bill Calculator
            </a>
            <a class="nav-link" href="team">
              My Team
            </a>
            <a class="nav-link" href="travel">
              Travel Cards
            </a>
            <a class="nav-link" href="meme">
              Meme Generator
            </a>
            <a class="nav-link" href="sign-up">
              Sign Up
            </a>
            <a class="nav-link" href="signin">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navb;
