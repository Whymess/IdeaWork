import React from 'react';
import {Logo} from '../../Images/index';
import '../../CSS/Header.css'


export default (props) => {
	return (
			<div className="container">
			  <div className="row">
			 		   <div className="col">
					       <img className="logo img-fluid" alt="" 
			        	 	src={Logo} />
					    </div>
					    <div className="col">
					     	<span className="header_info"> Login 212-123-4567 
					     	<i className="fa fa-align-justify"  />

					     	</span>

					    </div>
			  </div>
			</div>
			 
		)
	
}


