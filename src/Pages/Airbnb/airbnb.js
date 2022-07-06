import React from "react";

import head from "../../images/head.png";
import "../../App.css";
import Card from "./Card";
import data from "./data";



export default function Air() {
  const cards = data.map((item) => {
    return <Card key={item.id}
     {...item} />;
  });
  return (
    <div>
     
      <section className="air">
        <img src={head} alt="just a pic" className="air--photo" />
        <h1 className="air--header">Wonderful Places</h1>
        <p className="air--text">
        The world is filled with such a wide variety of wonderful destinations and beautiful places to visit, it can be difficult to compile a list of the best ones.
        </p>
      </section>
      <section className="cards-list">{cards}</section>
    </div>
  );
}
