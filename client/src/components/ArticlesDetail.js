import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticles, fetchArticle } from '../actions';

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
			return (
                <>
                    <div className="column article-box">
                    <div className="ui card">
                        <Link to="/" className="aticle-image" style={{background: `url("https://react.semantic-ui.com/images/wireframe/image.png") center no-repeat`}}>
                            <h3>
                                {article.title.rendered}
                            </h3>
                            <p className="description" dangerouslySetInnerHTML={{ __html: article.content.rendered }}>
                            </p>
                        </Link>
                        <div className="content">
                            <div className="meta">
                                <span className="date">{article.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            );
		});
    }
    render() {
        const {title, content, jetpack_featured_media_url } = this.props.article;
        return(
            <div>
                <section className="ui fluid container main-visual">
					{title.rendered}
                </section>
            </div>
        );
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