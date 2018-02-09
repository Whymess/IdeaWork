import React, { Component } from 'react';
import {
	Footer,
	Grid,
  Carousel
} from '../../Components/index';


export default class Application extends Component {
  render() {
    return (
      <div className="App">
        <Carousel/>
      	<Grid/>
       	<Footer/>
      </div>
    );
  }
}


