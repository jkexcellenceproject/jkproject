import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header'
import Login from './Login';

const Home = () => {
    return <div>Home</div>;
}

class App extends Component {

    renderNav() {
        if(!this.props.isLogin) {
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
                    <Route exact path="/" render={(props) => <Login isLogin={true} />} />
                    {this.renderNav()}
                    <div className="container">
                        <Route exact path="/home" component={Home} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;