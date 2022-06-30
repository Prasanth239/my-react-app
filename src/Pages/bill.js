import React from 'react';

 const Bill = () => {
	

	
	function divideBy() {

	let num1 = document.getElementById("firstNumber").value;
	let num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 / num2;
	}


		  return (
			<div>
			  <form>
				1st Number : <input type="text" id="firstNumber" /><br />
				2nd Number: <input type="text" id="secondNumber" /><br />
				
				<input type="button" onClick={divideBy} defaultValue="Split" />
			  </form>
			  <h1>Each person has to pay 
				<span id="result" />
			  </h1>
			 
			</div>
		  );
		}
	 

export default Bill;


