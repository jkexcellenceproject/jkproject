import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="ui left fixed vertical menu">
                <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} className="image" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link className="item" to="/">
                                <i className="material-icons">border_color</i>
                                Articles
                            </Link>
                        </li>
                        <li>
                            <Link className="item" to="/learningEnglish">
                                <i className="material-icons">help</i>
                                Create Quizs
                            </Link>
                        </li>
                        <li>
                            <Link className="item" to="/tutors">
                                <i className="material-icons">people</i>
                                Tutors
                            </Link>
                         </li>
                        
                        <li>
                            <Link className="item" to="/account-setting">
                                <i className="material-icons">account_box</i>
                                User Setting
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;