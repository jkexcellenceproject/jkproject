import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions';

import './articles.styles.scss';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serchTerm: '',
            currentArticles: []
        }
        this.serachArticles = this.serachArticles.bind(this);
    }
    componentDidMount() {
        document.querySelector('body').className = 'articles';
        this.props.fetchArticles();
        this.setState({
            currentArticles: this.props.articles
        });
    }
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
    serachArticles = (event) => {
        let searchArticle = _.filter(this.props.articles, article => article.title.rendered.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({
            serchTerm: event.target.value,
            currentArticles: searchArticle
        })
    }
    renderArticles() {
        if (this.props.articles == null) {
			return <p>Loading</p>;
        } else if(this.state.serchTerm.length === 0) {
            return this.props.articles.map(article => {
                let str = article.date;
                const sliceText = article.content.rendered.length > 80 ? article.content.rendered.slice(0, 80) + '…' : article.content.rendered;
                let date = str.split("T");
                return (
                    <>
                        <Link to={`/article-detail/${article.slug}`} className="column article-box" key={article.slug}>
                            <div className="aticle-image">
                                <h3>{article.title.rendered}</h3>
                                <p className="description" dangerouslySetInnerHTML={{ __html: sliceText }}></p>
                            </div>
                            <div className="meta content">
                                <span className="date">{date[0]}</span>
                            </div>
                        </Link>
                    </>
                );
            });
        }
		return this.state.currentArticles.map(article => {
            let str = article.date;
            let date = str.split("T");
			return (
                <>
                    <Link to={`/article-detail/${article.slug}`} className="column article-box" key={article.slug}>
                        <div className="aticle-image">
                            <h3>{article.title.rendered}</h3>
                            <p className="description" dangerouslySetInnerHTML={{ __html: article.content.rendered }}></p>
                        </div>
                        <div className="meta content">
                            <span className="date">{date[0]}</span>
                        </div>
                    </Link>
                </>
            );
        });
    }
    render() {
        return(
            <div className='blueGreen'>
                <section className="ui fluid main-visual">
					<div className="bcg-base">
						<img
							className="bcg-image"
							src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
						/>
						<div className="main-header">
							<h1>JK EXCELLENCE <span className="br">English Articles</span>
                            </h1>
						</div>
					</div>
				</section>
                <section className="ui container article-list content-padding">
                    <h2>Our article<span className="line-break"> to study English</span></h2>
                    <div className="ui right aligned category search">
                    <div className="ui icon input">
                        <input className="prompt" value={this.state.serchTerm} onChange={this.serachArticles} type="text" placeholder="Search articles..." />
                        <i className="search icon"></i>
                    </div>
                    </div>
                    <div className="ui stackable three column grid">
                            {this.renderArticles()}
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('1' + state);
	return { articles: Object.values(state.articles) };
};

export default connect(
	mapStateToProps,
	{ fetchArticles }
)(Articles);