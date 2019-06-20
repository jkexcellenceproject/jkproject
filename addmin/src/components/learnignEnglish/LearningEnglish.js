import React, { Component } from 'react';

class LearningEngllish extends Component {
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
    render() {
        return (
            <div class="ui middle aligned divided list">
                <div class="item">
                    <div class="right floated content">
                    <div class="ui button">Edit</div>
                    </div>
                    <div class="content">
                    Question title
                    </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div class="ui button">Edit</div>
                    </div>
                    <div class="content">
                    Question title
                    </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div class="ui button">Edit</div>
                    </div>
                    <div class="content">
                    Question title
                    </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div class="ui button">Edit</div>
                    </div>
                    <div class="content">
                    Question title
                    </div>
                </div>
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

export default LearningEngllish;