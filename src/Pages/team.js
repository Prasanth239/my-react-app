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
	
	<img src={pic1}width='420px'></img>
	<img src={pic2} width= '250px'></img>
	<img src="pra.jpg"width= '195px'/>

	
	</div>
);
};

export default Teams;
