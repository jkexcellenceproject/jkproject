import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from "../../actions";

class Blogs extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    componentWillMount(){
        document.getElementById('body').className='blogs'
    }
    componentWillUnmount(){
        document.getElementById('body').className=''
    }
    onClickPopup() {
        document.getElementById('add-form').className='open'
    }
    clickClose() {
        document.getElementById('add-form').className='';
    }
    renderList() {
        if(this.props.users === null){
            return <p>Loading</p>;
        }
        return Object.values(this.props.users).map(user => {
                return (
                    <div className="item" key={user.id}>
                        <div className="right floated content">
                            <div className="ui large teal button"><Link to={`/${user.id}`}>Edit</Link></div>
                        </div>
                            <img className="ui image" src="https://dummyimage.com/150x150/ccc/fff" />
                        <div className="content">
                            {user.name}
                        </div>
                    </div>
                );
                
            }
        )        
    }

    render() {
        return(
            <div className="ui middle aligned divided list">
                {this.renderList()}
                <button id="add" onClick={() => this.onClickPopup()} class="ui icon button red">
                    <i class="material-icons">add</i>
                </button>
                <div id="add-form">
                    <form class="ui form">
                        <div class="field">
                            <label>Title</label>
                            <input type="text" name="first-name" />
                        </div>
                        <div class="field">
                            <label>Text</label>
                            <textarea></textarea>
                        </div>
                        <div class="ui small image upload-image">
                            <img src={`${process.env.PUBLIC_URL}/images/common/upload-image.png`}/>
                            <input type="file" name="fileToUpload" id="fileToUpload"/>
                        </div>
                        <button class="ui large teal button" type="submit">Submit</button>
                        <button class="ui large red button" onClick={this.clickClose}>Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        users: state.users
    };
};

export default connect(
    mapStateToProps,
    { fetchUsers }
)(Blogs);
