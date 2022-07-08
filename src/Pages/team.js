
import React from 'react';

import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
const Teams = () => {
return (

	<div
	style={{
		background: '#669999',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90vh',
		padding : '1em',
		
	}}
	>
	<div style={{display:'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '90vh',
	padding : '1em',

}}>
	<div style={{ padding: "20px", width: "250px", borderRadius: "5px" }}>
	<img src={pic1}></img>
	<p>Name : Hitesh Ganjoo </p><br></br>
	<p>CEO & Founder Iksha Labs </p><br></br>
	</div>
	<img src={pic2} style={{ padding: "20px", width: "250px", borderRadius: "5px" }}></img>
	<p>Name : Lokesh </p><br></br>
	<p>Intern at Iksha Labs </p><br></br>
	<img src="pra.jpg"style={{ padding: "20px", width: "250px", borderRadius: "5px" }}/>

	<p>Name : Prasanth </p><br></br>
	<p>Intern at Iksha Labs </p><br></br>
	</div>
	
	</div>
	
);
};

export default Teams;
