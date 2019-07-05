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
			return (
                <>

                    <div className="column article-box">
                        <Link to={`/article-detail/${article.slug}`} className="aticle-image">
                            <h3>
                                {article.title.rendered}
                            </h3>
                            <p className="description" dangerouslySetInnerHTML={{ __html: article.content.rendered }}>
                            </p>
                        </Link>
                        <Link to={`/article-detail/${article.slug}`} >
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
        return(
            <div>
                <section className="ui fluid main-visual">
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
                <section className="ui container article-list">
                    <h2>Our article<span className="line-break"> to study English</span></h2>
                    <div className="ui stackable three column grid">
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