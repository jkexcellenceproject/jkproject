import React, { Component } from 'react';

class Home extends Component {

    componentWillMount(){
        document.getElementById('body').className='home'
    }
    componentWillUnmount(){
        document.getElementById('body').className=''
    }

    render() {
        return(
            <div>tttt</div>
        );
    }
}

export default Home;