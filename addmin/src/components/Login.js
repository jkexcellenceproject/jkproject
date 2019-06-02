import React, { Component } from 'react';

class Login extends Component {

    componentWillMount(){
        document.getElementById('body').className='login'
      }
        componentWillUnmount(){
        document.getElementById('body').className=''
      }

    render() {
        
        return(
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal">
                    <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} className="image" />
                    <div>
                        Log-in to your account
                    </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address" />
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            </div>
                            <div className="ui fluid large teal submit button">Login</div>
                        </div>

                    </form>
                </div>
            </div>

        );
    }
}

export default Login;