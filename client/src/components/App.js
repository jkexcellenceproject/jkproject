import React, { Component } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Articles from './Articles';
import Faq from './Faq';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={AboutUs} />
				<Route path="/articles" exact component={Articles} />
				<Route path="/faq" exact component={Faq} />
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
