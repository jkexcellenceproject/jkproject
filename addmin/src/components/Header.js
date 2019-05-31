import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="">User name</Link></li>
                        <li><Link to="">Tutors</Link></li>
                        <li><Link to="">Learning English</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;