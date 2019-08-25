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
		return this.props.articles.filter((article, idx) => idx < 3).map(article => {
			const text = article.content.rendered;
			const sliceText = text.length > 80 ? text.slice(0, 80) + '…' : text;
			const spiltDate = article.date.split('T');
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
									<span className="date white-text">{spiltDate[0]}</span>
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
			<div className="ui stackable grid container">
				<div className="four wide column">
					<h3 className="white-text">Lorem ipsum dolor sit amet</h3>
					<p className="white-text">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
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
