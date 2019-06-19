import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/common.scss';
import '../styles/style.scss';
import Header from './Header'
import Login from './Login';
import Blogs from './blog/Blogs';
import BlogEdit from './blog/BlogEdit';
import LearningEnglish from './learnignEnglish/LearningEnglish';
import BlogNew from './blog/BlogNew';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    renderNav() {
        if(window.location.pathname !== "/login") {
            return (
                <>
                    <Header />
                </>
            );
        }
    }

    render() {
        return(
            <>
                <BrowserRouter>
                    {this.renderNav()}
                    <div className="container">
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Blogs} />
                        <Route exact path="/blog/new" component={BlogNew} />
                        <Route exact path="/blog/edit/:id" component={BlogEdit} />
                        <Route exact path="/learningEnglish" component={LearningEnglish} />
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

export default App;