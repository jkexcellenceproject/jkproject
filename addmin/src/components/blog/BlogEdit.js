import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editBlog } from "../../actions";

class BlogEdit extends Component {
    componentDidMount() {
        this.props.editBlog(this.props.match.params.id);
    }
    componentWillMount(){
        document.getElementById('body').className='edit-blog';
    }
    componentWillUnmount(){
        document.getElementById('body').className='';
    }
    onClickPopup() {
        document.getElementById('add-form').className='open';
    }
    clickClose() {
        document.getElementById('add-form').className='';
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
    render() {
        return(
            <div className="ui middle aligned divided list">
                {this.renderList()}
                <button id="add" onClick={() => this.onClickPopup()} className="ui icon button red">
                    <i className="material-icons">add</i>
                </button>
                <div id="add-form">
                    <form className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" name="first-name" />
                        </div>
                        <div className="field">
                            <label>Text</label>
                            <textarea></textarea>
                        </div>
                        <div className="ui small image upload-image">
                            <img src={`${process.env.PUBLIC_URL}/images/common/upload-image.png`}/>
                            <input type="file" name="fileToUpload" id="fileToUpload"/>
                        </div>
                        <button className="ui large teal button" type="submit">Submit</button>
                        <button className="ui large red button" onClick={this.clickClose}>Cancel</button>
                    </form>
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
    mapStateToProps,
    { editBlog }
)(BlogEdit);
