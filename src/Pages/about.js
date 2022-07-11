import React from 'react';
import pic3 from '../images/pic3.jpg';

export default function About() {

return (
	
	<div

  style={{
  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'
  }}
 >
    <ul>
        <img src={pic3} style={{ marginBottom: "20px", width: "200px", borderRadius: "5px" }}/>
        
        <h6>
          Name : Prasanth <br></br>
          Company Name : ikshalabs<br></br>
          Mobile : 1234567890 <br></br>
          Email id : prasanth@gmail.com <br></br>
          Address : India <br></br>
          
        </h6>

        </ul>

       
    </div>
	
)
};
