import React, { Component } from 'react';
import {
	Item
} from '../../Components/index'
import state from '../../Helpers/InitalStateOfApp'

export default class Grid extends Component {

    renderFirstRow(){
    	return state.map((el, i) => {
    		if(i < 3){
	    		return (
	    			<div className="col" key={i}>
				     	<Item {...el} />
				    </div>	
	    		)
    		} 

    		return false 
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
    		
    		return false
    		
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

