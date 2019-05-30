import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';
import Home from './Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Slider />
				<Route path="/" exact component={Home} />
			</BrowserRouter>
		);
	}
}

export default App;