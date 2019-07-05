import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles, deleteArticle } from "../../actions";


class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = { showFormReview: false };
    }
    componentDidMount() {
        this.props.fetchArticles();
        document.getElementById('body').className='articles';
    }
    componentWillUnmount(){
        document.getElementById('body').className='';
    }
    deletePost = (id) => {
        const {history} = this.props;
        this.props.deleteArticle(id, history);
    }
    renderList() {
        if(this.props.articles === null){
            return <p>Loading</p>;
        }
        return this.props.articles.map(article => {
            if(!article[0]) {
                console.log(article.dateSent);
                return (
                    <div className="item" key={article.id}>
                        <div className="right floated content">
                            <div className="ui large teal button"><Link to={`/article/edit/${article.id}`}>Edit</Link></div>
                            <button className="ui large red button" onClick={() => { if (window.confirm('Do you want to delete it ?')) this.deletePost(article.id) } }>Delete</button>
                        </div>
                            <img className="ui image" src="https://dummyimage.com/150x150/ccc/fff" />
                        <div className="content">
                            {article.title}
                        </div>
                    </div>
                    );
                }   
            }
        )       
    }
    render() {
        return(
            <div className="ui middle aligned divided list">
                {this.renderList()}
                <Link id="add" to="/article/new" className="ui icon button red">
                    <i className="material-icons">add</i>
                </Link> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        articles: Object.values(state.articles)
    };
};
      
export default connect(
    mapStateToProps,
    { 
        fetchArticles,
        deleteArticle
    }
)(Articles);
