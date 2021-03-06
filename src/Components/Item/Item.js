import React from 'react';
import '../../CSS/Item.css'


export default (props) => {

return (
    <div className="Item">
  	    <div className="card">
          <img className="card-img-top img-fluid" alt="" src={props.photo} />
          <div className="card-block">
            <p className="card-text">{props.date}</p>
             <h4 className="card-title">{props.catchPhrase}</h4>
             <p className="card-link"> Presented by: 
             <a className="linkToSomeWhere" href="google.com">
              {props.presenter}</a> </p>


          </div>
        </div>
  	</div>
		)
	
}
