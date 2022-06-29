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


	let d =new Date()
	const h=d.getHours()
	let m=d.getMinutes()
	let s=d.getSeconds()
	const m1=m/60
	const s1=s/3600
	const time=h+m1+s1;
	let output;
	if (time > 3 && time <= 9)
	   output="Good Morning"
	else if (time > 9 && time <= 15)
	   output="Good Afternoon"
	else if(time > 15 && time <= 21)
		output="Good Evening"
	else
		output="Good Night"

	return (
	
		<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '50vh'
		}}
		>
	<ul>
			<h3>Hello! user {output}. The Time is {h}:{m} now. </h3>
		   
			<h3>Total Steps after {days} days is {b}</h3>

			</ul>
		</div>
		
	)
	
};


export default Step;
