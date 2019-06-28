import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

import { Link } from 'react-router-dom';

import '../styles/common.scss';
import '../styles/style.scss';

class EnglishArticleCard extends React.Component {
	componentDidMount() {
		this.props.fetchArticles();
	}

	renderList() {
		if (this.props.articles === null) {
			return <p>Loading</p>;
		}
		return this.props.articles.map(article => {
			if (!article[0]) {
				console.log(article.dateSent);

				return (
					<div className="column">
						<div className="ui card" key={article.id}>
							<div className="image">
								<img src="https://dummyimage.com/150x150/ccc/fff" />
							</div>
							<div className="content">
								<div className="header">{article.title}</div>
								<div className="meta">
									<span className="date">Sep. 06 / 2013</span>
								</div>
								<div className="description">fadfas</div>
							</div>
							<div className="extra content">
								<a>
									<i className="comment icon" />
									22 Comments
								</a>
							</div>
						</div>
					</div>
				);
			}
		});
	}

	render() {
		return (
			<div className="ui stackable four column row">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = state => {
	return { articles: Object.values(state.articles) };
};

export default connect(
	mapStateToProps,
	{ fetchArticles }
)(EnglishArticleCard);
