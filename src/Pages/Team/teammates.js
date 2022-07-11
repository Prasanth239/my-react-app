import React from "react";


export default function Faces(props) {
  return (
    <div>
        <img src={require(`../../images/${props.coverImg}`)}  />
        <h6 >{props.title} </h6>
        <p >{props.description}</p>
        <h6 >{props.location}</h6>
      </div> 
     
  );
}

