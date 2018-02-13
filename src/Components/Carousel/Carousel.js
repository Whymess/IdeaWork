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
            picturePostion: 0
        }

        this.imageArray = [Carouselmage, Carouselmagecopyone, Carouselmagecopytwo]
    }

    
    componentDidMount(){
        var count = 0
    	let changePicture = setInterval(() => { 
    		count++;
    		this.setState((state) => ({currentImage : this.imageArray[count]}))
    		if(count === 2){
    			count = 0 
    		}
    		

    	}, 3000);
    }


    componentWillUnmount(){
  		 clearInterval(this.changePicture);
	}

    onClicChangeImage = (e) => {
        let {picturePostion} = this.state 
        if(picturePostion === 3){
            this.setState((state) => ({picturePostion: 0}))
            let postion = this.imageArray[this.state.picturePostion]
            this.setState((state) => ({currentImage:postion}))
        } else {
            this.setState({picturePostion: this.state.picturePostion + 1})
            let postion = this.imageArray[this.state.picturePostion]
            this.setState({currentImage:postion})
        }

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
        	 	<img 
                    className="Carouselmage img-fluid" 
                    alt="" 
        	 	    src={this.state.currentImage || Carouselmage} 
                    onClick={this.onClicChangeImage}
                    />
        	 	 <Dots change={this.changeImage}/>
        	 </div>
        );
    }
}

