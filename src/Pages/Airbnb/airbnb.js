import React from "react";
import airbnb from '../../images/airbnb.png';
import livrom from '../../images/livrom.webp';
import "../../App.css";



export default function Air() {
  return (
    <>
    <nav className="nav1">
            <img src={airbnb} alt="logo" className="nav--logo"/>
        </nav>
        
        <section className="air">
        <img src={livrom} alt="just a pic" className="air--photo" />
        <h1 className="air--header">Online Experiences</h1>
        <p className="air--text">Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
    </>
  );
}
