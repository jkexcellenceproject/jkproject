import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/common.scss';
import '../styles/style.scss';
import Header from '../header/Header';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import AboutUs from './about/AboutUs';
import Articles from './articles/Articles';
import ArticlesDetail from './articleDetail/ArticlesDetail';
import StudentInterView from './StudentInterview';
import Faq from './faq/Faq';
import Contact from './Contact';
import Footer from './footer/Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={AboutUs} />
					<Route path="/articles" exact component={Articles} />
					<Route
						path="/article-detail/:slug"
						exact
						component={ArticlesDetail}
					/>
					<Route path="/student-interview" exact component={StudentInterView} />
					<Route path="/faq" exact component={Faq} />
					<Route path="/contact" exact component={Contact} />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default App;
