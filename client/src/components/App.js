import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Home} />
			</BrowserRouter>
		);
	}
}

export default App;
