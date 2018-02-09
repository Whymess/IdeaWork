import React, { Component } from 'react';
import {
	Item
} from '../../Components/index'
import state from '../../Helpers/InitalStateOfApp'

export default class Grid extends Component {
    constructor(props) {
        super(props);
    }

    renderFirstRow(){
    	return state.map((el, i) => {
    		if(i < 3){
	    		return (
	    			<div className="col" key={i}>
				     	<Item {...el} />
				    </div>	
	    		)
    		} 
    	})
    }

    renderSecondRow(){
    	return state.map((el, i) => {
    		if(i >= 3){
	    		return (
	    			<div className="col" key={i}>
				     	<Item {...el} />
				    </div>	
	    		)
    		} 
    	})
    }



    render() {
    
    
        return (
        	<div className="container">
			  <div className="row">
			 		{this.renderFirstRow()}
			  </div>
			  <div className="row">
			 		{this.renderSecondRow()}
			  </div>

			</div>
        );
    }
}

