import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

class Articles extends Component {
    componentDidMount() {
        document.querySelector('body').className = 'articles';
        this.props.fetchArticles();
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
    renderList() {
        if (this.props.articles === null) {
			return <p>Loading</p>;
		}
		return this.props.articles.map(article => {
			if (!article[0]) {
				console.log(article.dateSent);
				return (
					<>
						<div className="column article-box">
                        <div className="ui card">
                            <Link to="/" className="image">
                                <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to="/" className="header">
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="description">
                                    {article.content}
                                </p>
                                <div className="meta">
                                    <span className="date">{article.dateSent}</span>
                                </div>
                            </div>
                        </div>
                    </div>
					</>
				);
			}
		});
    }
    render() {
        return(
            <div>
                <section className="ui fluid container main-visual">
					<div className="bcg-base">
						<img
							className="bcg-image"
							src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
						/>
						<div className="main-header">
							<h1>JK EXCELLENCE <span className="br">ENGLISH ARTICLES</span>
							<span className="br">FOR LEARNING</span>
                            </h1>
						</div>
					</div>
				</section>
                <section className="ui grid container content-padding">
                    <h2>Our article to study English</h2>
                    <div className="three column row">
                            {this.renderList()}
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
	return { articles: Object.values(state.articles) };
};

export default connect(
	mapStateToProps,
	{ fetchArticles }
)(Articles);