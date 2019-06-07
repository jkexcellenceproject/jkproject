import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from "../../actions";

class Blogs extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
    }
    componentWillMount(){
        document.getElementById('body').className='blogs';
    }
    componentWillUnmount(){
        document.getElementById('body').className='';
    }
    onClickPopup() {
        document.getElementById('add-form').className='open'
    }
    clickClose() {
        document.getElementById('add-form').className='';
    }
    renderList() {
        if(this.props.blogs === null){
            return <p>Loading</p>;
        }
        return this.props.blogs.map(blog => {
            if(!blog[0]) {
                return (
                    <div className="item" key={blog.id}>
                        <div className="right floated content">
                            <div className="ui large teal button"><Link to={`/blog/edit/${blog.id}`}>Edit</Link></div>
                        </div>
                            <img className="ui image" src="https://dummyimage.com/150x150/ccc/fff" />
                        <div className="content">
                            {blog.title}
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

const mapStateToProps = state => {
    return { 
        blogs: Object.values(state.blogs)
    };
};

export default connect(
    mapStateToProps,
    { fetchBlogs }
)(Blogs);
