import React, { Component } from 'react';
import Carouselmage from '../../Images/Carouselmage.png'
import '../../CSS/Carouselmage.css';
import {
	Dots
} from '../index'

export default class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    changeImage = (e) => {
    	console.log(e.target.id)
    }

    render() {
        return (
        	 <div>
        	 	<img className="Carouselmage img-fluid" alt="" src={Carouselmage} />,
        	 	 <Dots change={this.changeImage}/>
        	 </div>
        );
    }
}

