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

    render() {
        return (
        	 <div>
        	  <img className="Carouselmage" alt="" src={Carouselmage} />
        	  	<Dots/>
        	  </div>
        );
    }
}

