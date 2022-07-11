import React from "react";
import "../../App.css";
import Faces from "./teammates";
import data from "./teamdata";

const team = data.map((item) => {
  return <Faces key={item.id} {...item} />;
});

export default function Teams() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <div class="d-block w-100">{team[0]}</div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <div class="d-block w-100">{team[1]}</div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100">{team[2]}</div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100">{team[3]}</div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100">{team[4]}</div>
        </div>
      </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    </div>
  );
}
