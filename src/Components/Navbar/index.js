import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>

		<NavLink to='/home' >
			Home
		</NavLink>
		<NavLink to='/about'>
			About Me
		</NavLink>
		<NavLink to='/step' >
			Step Counter
		</NavLink>
		<NavLink to='/bill' >
			Split Bill Calculator
		</NavLink>
		<NavLink to='/team' >
			My Team
		</NavLink>
		<NavLink to='/sign-up' >
			Sign Up
		</NavLink>
		
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
