import React from 'react';
import '../../CSS/Item.css'


export default (props) => {

return (
  <div className="Item">
	<div className="card">
        <img className="card-img-top" src={props.photo} />
        <div className="card-block">
          <h4 className="card-title">{props.catchPhrase}</h4>
          <p className="card-text">{props.date}</p>
        </div>
      </div>
	</div>

		)
	
}
