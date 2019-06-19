import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs, deleteBlog } from "../../actions";


class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = { showFormReview: false };
    }
    componentDidMount() {
        this.props.fetchBlogs();
        document.getElementById('body').className='blogs';
    }
    componentWillUnmount(){
        document.getElementById('body').className='';
    }
    deletePost = (id) => {
        this.props.deleteBlog(id);
        console.log("render");
    }
    renderList() {
        if(this.props.blogs === null){
            return <p>Loading</p>;
        }
        return this.props.blogs.map(blog => {
            if(!blog[0]) {
                console.log(blog.dateSent);
                return (
                    <div className="item" key={blog.id}>
                        <div className="right floated content">
                            <div className="ui large teal button"><Link to={`/blog/edit/${blog.id}`}>Edit</Link></div>
                            <button className="ui large red button" onClick={() => { if (window.confirm('Do you want to delete it ?')) this.deletePost(blog.id) } }>Delete</button>
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
                <Link id="add" to="/blog/new" className="ui icon button red">
                    <i className="material-icons">add</i>
                </Link> 
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
    { 
        fetchBlogs,
        deleteBlog
    }
)(Blogs);
