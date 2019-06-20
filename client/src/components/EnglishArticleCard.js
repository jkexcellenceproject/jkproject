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
						<div className="item" key={article.id}>
							<div className="right floated content">
								<div className="ui large teal button">
									<Link to={`/article/edit/${article.id}`}>Edit</Link>
								</div>
								<button
									className="ui large red button"
									onClick={() => {
										if (window.confirm('Do you want to delete it ?'))
											this.deletePost(article.id);
									}}
								>
									Delete
								</button>
							</div>
							<img
								className="ui image"
								src="https://dummyimage.com/150x150/ccc/fff"
							/>
							<div className="content">{article.title}</div>
						</div>
					</div>
				);
			}
		});
	}

	render() {
		return <div className="four column row">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { articles: Object.values(state.articles) };
};

export default connect(
	mapStateToProps,
	{ fetchArticles }
)(EnglishArticleCard);
