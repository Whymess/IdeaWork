import React, { Component } from 'react';
import '../../CSS/Dots.css'

export default class Dots extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <nav className="carousel">
	        <input id="carousel-item-1" 
	        		type="radio" 
	        		name="carousel-dots"  
	        		

	        		defaultChecked  />
	        <label htmlFor="carousel-item-1">Go to item 1</label>
	        <input id="carousel-item-2" type="radio" name="carousel-dots"/>
	        <label htmlFor="carousel-item-2">Go to item 2</label>
	        <input id="carousel-item-3" type="radio" name="carousel-dots" /> 
	        <label htmlFor="carousel-item-3">Go to item 3</label>
	      </nav>
            
        );
    }
}

