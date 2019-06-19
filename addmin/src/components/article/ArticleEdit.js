import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { editArticle } from "../../actions";
import ArticleForm from './ArticleForm';
import ArticleEditFormReview from './ArticleEditFormReview';

class ArticleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { showFormReview: false };
    }
    componentDidMount() {
        this.props.editArticle(this.props.match.params.id);
    }
    renderForm() {
        if (this.state.showFormReview) {
            return (
                <ArticleEditFormReview 
                    onCancel={()=> this.setState({ showFormReview: false })}
                    id = {this.props.match.params.id}
                />
                );
            }
            else {
                console.log(this.props.article.state);
                if(this.props.article.state !== undefined) {
                    const {title, content} = this.props.article.state[0];
                    console.log(this.props.article.state[0]);
                    return (
                        <ArticleForm 
                            onArticleSubmit = {() => this.setState({ showFormReview: true })}
                            initialValues={{title: title, content: content}}
                            onCancel={()=> this.setState({ showFormReview: false })}
                        />
                    ); 
                }
            }
        }
    render() {
        return(
            <div className="ui middle aligned divided list">
                <div className="ui large teal button"><Link to="/">Back</Link></div>
                <div className="ui middle aligned divided list">
                    <div id="add-form">
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        article:state.articles
    };
};

export default connect(
    mapStateToProps, {
        editArticle
    }
)(reduxForm({
    form: 'articleForm'
  })(ArticleEdit))