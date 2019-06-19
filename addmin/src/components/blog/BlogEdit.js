import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { editBlog } from "../../actions";
import BlogForm from './BlogForm';
import BlogEditFormReview from './BlogEditFormReview';

class BlogEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { showFormReview: false };
    }
    componentDidMount() {
        this.props.editBlog(this.props.match.params.id);
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
                console.log(this.props.blog.state);
                if(this.props.blog.state !== undefined) {
                    const {title, content} = this.props.blog.state[0];
                    console.log(this.props.blog.state[0]);
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

export default connect(
    mapStateToProps, {
        editBlog
    }
)(reduxForm({
    form: 'blogForm'
  })(BlogEdit))