import '../custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
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
	<div style={{display:'flex',}}>
	<img src={pic1}style={{ padding: "20px", width: "250px", borderRadius: "5px" }}></img>
	<img src={pic2} style={{ padding: "20px", width: "250px", borderRadius: "5px" }}></img>
	<img src="pra.jpg"style={{ padding: "20px", width: "250px", borderRadius: "5px" }}/>
	</div>
	
	</div>
);
};

export default Teams;
