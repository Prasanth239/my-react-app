import React from 'react';

const Index = () => {

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
		height: '90vh'
	}}
	>
	<h3>Hello! user {output}. The Time is {h}:{m} now. </h3>
	</div>
);
};

export default Index;
