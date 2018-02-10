import React from 'react';
import {Logo} from '../../Images/index';
import '../../CSS/Header.css'


export default (props) => {

	return (
			  <div className="row justify-content-around">
			    <div className="col-4">
			      <img className="logo img-fluid" alt="" 
			        	 	src={Logo} />
			    </div>
			    <div className="col-4">
			      	<span className="header_info"> Login 212-123-4567 </span>
			    </div>
			  </div>
		)
	
}


