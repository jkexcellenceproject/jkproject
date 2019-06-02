import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import '../styles/common.scss';
import '../styles/style.scss';
import Header from './Header'
import Login from './Login';

const Home = () => {
    return <div>Home</div>;
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    renderNav() {
        if(window.location.pathname !== "/") {
            return (
                <>
                    <Header />
                </>
            );
        }
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    {this.renderNav()}
                    <div className="container">
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;