import React, { useState } from "react";
import { Button } from "reactstrap";
import memeData from "./memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/2vnb44.jpg");

  function getMemeImage() {
    const imageArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * imageArray.length);
    setMemeImage(imageArray[randomNumber].url);
  }

  return (
  
      <div class="text-center" >
     
        <Button onClick={getMemeImage} class="btn btn-primary btn-lg">Click to generate meme</Button>
      

        <div   >
        <img src={memeImage}  width="350px" />
        </div>
      </div>
   
  );
}
