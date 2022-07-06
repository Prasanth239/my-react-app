import React from "react";


export default function Card(props) {
  

  return (
    <div className="card">
      
      <img src={require(`../../images/${props.coverImg}`)} className="card--image" />
      <div className="card--stats">
        <img src={require('../../images/star.png')} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--title">{props.description}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

