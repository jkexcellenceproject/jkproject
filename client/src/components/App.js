import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={AboutUs} />
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
