import React, { Component } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import AboutUs from './AboutUs';
import Articles from './Articles';
import ArticlesDetail from './ArticlesDetail';
import StudentInterView from './StudentInterview';
import Faq from './Faq';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
			<ScrollToTop>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={AboutUs} />
				<Route path="/articles" exact component={Articles} />
				<Route path="/article-detail/:slug" exact component={ArticlesDetail} />
				<Route path="/student-interview" exact component={StudentInterView} />
				<Route path="/faq" exact component={Faq} />
				<Footer />
			</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default App;
