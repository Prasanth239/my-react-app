import React from 'react';

const Bill = () => {

function splitBill(totalBill,People) {

return`${totalBill/People}`;

} 

const amount = splitBill()


return (
	
	
		<div 
		style={{
			background: '#669999',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '90vh'}}
		>
			<form>
			<ul>
Total Bill    :  <input type="text" id="totalBill" /><br></br>
No. of People: <input type="text" id="People" /><br></br>
<input type="button" onClick="splitBill()" Value="Split" />
</ul>

</form>
</div>
	

);
};

export default Bill;


