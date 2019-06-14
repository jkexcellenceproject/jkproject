import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from "../../actions";


class Blogs extends Component {
    state = { showFormReview: false };
    componentDidMount() {
        this.props.fetchBlogs();
    }
    componentWillMount(){
        document.getElementById('body').className='blogs';
    }
    componentWillUnmount(){
        document.getElementById('body').className='';
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
        fetchBlogs
    }
)(Blogs);
