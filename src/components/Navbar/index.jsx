import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = ()=>{
	return(
		<ul>
			<li>
				<Link to="/home">Home</Link>
			</li>
			<li>
				<Link to="/">Welcome</Link>
			</li>
		</ul>
	);
}

export default Navbar;