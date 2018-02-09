import React, { Component } from 'react';
import '../../CSS/Carouselmage.css';
import {
	Dots
} from '../index';

import {
	Carouselmage,
	Carouselmagecopyone,
Carouselmagecopytwo
} from '../../Images/index'



export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	currentImage: ''
        }

       this.imageMap = {
        	"carousel-item-1": Carouselmage,
        	"carousel-item-2": Carouselmagecopyone,
        	"carousel-item-3": Carouselmagecopytwo,
        }
    }

    changeImage = (e) => {
    	let image = this.imageMap[e.target.id]
    	this.setState({currentImage:image })
    }

    render() {
        return (
        	 <div>
        	 	<img className="Carouselmage img-fluid" alt="" 
        	 	src={this.state.currentImage || Carouselmage} />,
        	 	 <Dots change={this.changeImage}/>
        	 </div>
        );
    }
}

