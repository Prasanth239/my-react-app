import React from 'react';

const Step = () => {

	function walkingSteps(dailySteps, daysWalked){

		let stepCount = 50;
		
		return function steps(){
	
		  stepCount= stepCount+(dailySteps*daysWalked);
		  return stepCount;
		
		}
	  }
	
	  let days= Math.floor((Math.random() * 100) + 1);
	
	const totalSteps = walkingSteps(100,days)
	
	let b = totalSteps();


	return (
	
		<div
		style={{
			background: '#669999',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '90vh'
		}}
		>
	<ul>
			


		   
			<h3>Total Steps after {days} days is {b}</h3>



			</ul>
		</div>
		
	)
	
};


export default Step;
