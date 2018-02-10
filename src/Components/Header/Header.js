import React from 'react';
import {Logo} from '../../Images/index';
import '../../CSS/Header.css'


export default (props) => {

	return (
		<div className="Header">
				<img className="logo img-fluid" alt="" 
        	 	src={Logo} />

        	 	<span className="Header_info"> 212-123-4567  Login </span>
		</div>
		)
	
}
