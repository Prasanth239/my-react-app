import React, { useState } from "react";
import memeData from "./memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/2vnb44.jpg");

  function getMemeImage() {
    const imageArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * imageArray.length);
    setMemeImage(imageArray[randomNumber].url);
  }

  return (
    
    <div class="p-3 mb-2  text-white">
      <div class="d-grid col-4 mx-auto">
        <button onClick={getMemeImage} class="btn btn-primary btn-lg"> Click to generate meme </button> 
      </div >
      <div class="text-center"
      >
      <img src={memeImage} class="img-thumbnail"  width="20%" />
      </div>
     
    </div>
    
  );
}
