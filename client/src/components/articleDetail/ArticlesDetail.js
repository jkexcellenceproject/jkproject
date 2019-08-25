import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticles, fetchArticle } from '../../actions';

import './article-detail.styles.scss';

class Articles extends Component {
	componentDidMount() {
		document.querySelector('body').className = 'articles article-detail';
		this.props.fetchArticle(
			this.props.match.params.slug,
			this.props.fetchArticles()
		);
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
	renderList() {
		if (this.props.articles === null) {
			return <p>Loading</p>;
		}
		return this.props.articles.filter(article => this.props.match.params.slug != article.slug).filter((article, idx) => idx < 4).map((article, index) => {
			const sliceText = article.content.rendered.length > 80 ? article.content.rendered.slice(0, 80) + '…' : article.content.rendered;
			const spiltDate = article.date.split('T')
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
								dangerouslySetInnerHTML={{ __html: sliceText }}
							/>
						</Link>
						<div className="content">
							<div className="meta">
								<span className="date">{spiltDate[0]}</span>
							</div>
						</div>
					</div>
				</>
			);
		});
	}
	render() {
		if (!this.props.article) {
			return (
				<div>
					<section className="ui fluid container main-visual">
						<div>
							<h1>Loding...</h1>
						</div>
					</section>
				</div>
			);
		} else {
			const { title, content, jetpack_featured_media_url } = this.props.article;
			return (
				<div className="blueGreen article-detail-content">
					<section className="ui two column stackable container content-padding grid">
						<div className="twelve wide column article-content">
							<h1>{title.rendered}</h1>
							{ jetpack_featured_media_url ?  <img src={jetpack_featured_media_url} alt={title.rendered} /> : ''}
							<p dangerouslySetInnerHTML={{ __html: content.rendered }} />
						</div>
						<div className="four wide column">
							<ul>{this.renderList()}</ul>
						</div>
					</section>
				</div>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		article: state.articles[ownProps.match.params.slug],
		articles: Object.values(state.articles)
	};
};

export default connect(
	mapStateToProps,
	{ fetchArticles, fetchArticle }
)(Articles);
