import React from "react";


export default function Card(props) {
  

  return (
    <div className="card">
      
      <img src={require(`../../images/${props.coverImg}`)} className="card--image" />

      <h6 className="card--title">{props.title} • <span className="gray">{props.location}</span></h6>
      <p className="card--title">{props.description}</p>
      <div className="card--stats">
     <p> <span>Rating</span><img src={require('../../images/star.png')} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) </span>
        </p>
      </div>
     
      
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

