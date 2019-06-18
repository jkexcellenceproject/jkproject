import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { editBlog } from "../../actions";
import BlogForm from './BlogForm';
import BlogEditFormReview from './BlogEditFormReview';

class BlogEdit extends Component {
    state = { showFormReview: false };
    componentDidMount() {
        this.props.editBlog(this.props.match.params.id);
    }
    componentWillMount(){
        document.getElementById('body').className='edit-blog';
    }
    componentWillUnmount(){
        document.getElementById('body').className='';
    }
    renderList() {
        if(this.props.blog.state !== undefined) {
            const {title, content} = this.props.blog.state[0];
            return (
                <>
                <h1>{title}</h1>
                <p>{content}</p>
                </>
            );
        }
    }
    renderForm() {
        if (this.state.showFormReview) {
            return (
                <BlogEditFormReview 
                    onCancel={()=> this.setState({ showFormReview: false })}
                    id = {this.props.match.params.id}
                />
                );
            }
            else {
                if(this.props.blog.state !== undefined) {
                    const {title, content} = this.props.blog.state[0];
                    return (
                        <BlogForm 
                            onBlogSubmit = {() => this.setState({ showFormReview: true })}
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
                {this.renderList()}
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
        blog:state.blogs
    };
};

export default connect(mapStateToProps, {editBlog})(reduxForm({
    form: 'blogForm'
  })(BlogEdit))