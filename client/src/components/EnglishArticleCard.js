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
			return (
				<>
					<div className="column article-box">
						<Link
							to={`/article-detail/${article.slug}`}
							className="aticle-image"
						>
							<h3>{article.title.rendered}</h3>
							<p
								className="description"
								dangerouslySetInnerHTML={{ __html: article.content.rendered }}
							/>
						</Link>
						<Link to={`/article-detail/${article.slug}`}>
							<div className="content">
								<div className="meta">
									<span className="date">{article.date}</span>
								</div>
							</div>
						</Link>
					</div>
				</>
			);
		});
	}

	render() {
		// console.log(this.props);
		return (
			<div className="ui stackable four column rowasu">{this.renderList()}</div>
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
