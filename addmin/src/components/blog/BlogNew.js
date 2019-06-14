import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview';


class BlogNew extends Component {
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
                <BlogFormReview 
                    onCancel={()=> this.setState({ showFormReview: false })}
                />
                );
            }
            return (
                <BlogForm 
                        onBlogSubmit = {() => this.setState({ showFormReview: true })}
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
    form: 'blogForm'
  })(BlogNew);
