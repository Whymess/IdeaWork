import React, { Component } from 'react';
import {
	Footer,
	Grid,
  Carousel,
  Header 
} from '../../Components/index';


export default class Application extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carousel/>
      	<Grid/>
       	<Footer/>
      </div>
    );
  }
}


