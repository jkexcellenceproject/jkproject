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
			const text = article.content.rendered;
			const sliceText = text.length > 80 ? text.slice(0, 80) + '…' : text;
			console.log(text);
			return (
				<>
					<div
						key={article.title.rendered}
						className="four wide column article-box"
					>
						<Link
							to={`/article-detail/${article.slug}`}
							className="aticle-image"
						/>
						<Link to={`/article-detail/${article.slug}`}>
							<div className="content" style={{ marginTop: '10px' }}>
								<div className="meta">
									<span className="date white-text">{article.date}</span>
								</div>
							</div>
						</Link>
						<h3 className="white-text" style={{ margin: '0 0 10px 0' }}>
							{article.title.rendered}
						</h3>
						<p
							className="description white-text"
							dangerouslySetInnerHTML={{ __html: sliceText }}
						/>
						<Link
							to={`/article-detail/${article.slug}`}
							className="ui button yellow"
						>
							Read More
						</Link>
					</div>
				</>
			);
		});
	}

	render() {
		return (
			<div className="ui grid container">
				<div className="four wide column">
					<h3 className="white-text">
						blog sub titleblog sub titleblog sub titleblog sub titleblog sub
						titleblog sub title
					</h3>
					<p className="white-text">
						exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex
					</p>
					<Link className="ui yellow button" to="/articles">
						See Articles
					</Link>
				</div>
				{this.renderList()}
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
)(EnglishArticleCard);
