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
        	currentImage: '',
        	count: 0
        }

      
    }

    componentDidMount(){
    
    	let changePicture = setInterval(() => { 
    		let {count} = this.state
    		let imageArray = [Carouselmage, Carouselmagecopyone, Carouselmagecopytwo]
    		this.setState((state) => ({count : state.count + 1}))
    		this.setState((state) => ({currentImage : imageArray[count]}))

    		if(count === 2){
    			this.setState((state) => ({count: 0}))
    		}
    		

    	}, 3000);
    }


    componentWillUnmount(){
  		 clearInterval(this.changePicture);
	}

    changeImage = (e) => {
    	let imageMap = {
        	"carousel-item-1": Carouselmage,
        	"carousel-item-2": Carouselmagecopyone,
        	"carousel-item-3": Carouselmagecopytwo,
        }
    	let image = imageMap[e.target.id]
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

