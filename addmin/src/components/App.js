import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/common.scss';
import '../styles/style.scss';
import Header from './Header'
import Login from './Login';
import Articles from './article/Articles';
import ArticleEdit from './article/ArticleEdit';
import LearningEnglish from './learnignEnglish/LearningEnglish';
import ArticleNew from './article/ArticleNew';


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
                        <Route exact path="/" component={Articles} />
                        <Route exact path="/article/new" component={ArticleNew} />
                        <Route exact path="/article/edit/:id" component={ArticleEdit} />
                        <Route exact path="/learningEnglish" component={LearningEnglish} />
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

export default App;