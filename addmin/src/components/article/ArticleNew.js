import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ArticleForm from './ArticleForm';
import ArticleFormReview from './ArticleFormReview';


class ArticleNew extends Component {
    state = { showFormReview: false };
    componentWillMount(){
        document.getElementById('body').className='blog-new';
    }
    componentWillUnmount(){
        document.getElementById('body').className='';
    }
    renderForm() {
        if (this.state.showFormReview) {
            return (
                <ArticleFormReview 
                    onCancel={()=> this.setState({ showFormReview: false })}
                />
                );
            }
            return (
                <ArticleForm 
                        onArticleSubmit = {() => this.setState({ showFormReview: true })}
                        onCancel={()=> this.setState({ showFormReview: false })}
                />
            ); 
        }
    render() {
        return(
            <div className="ui middle aligned divided list">
                <div id="add-form">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}
      
export default reduxForm({
    form: 'articleForm'
  })(ArticleNew);
