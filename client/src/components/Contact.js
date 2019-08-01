import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
  componentDidMount() {
      document.querySelector('body').className = 'contact'; 
	}
	componentWillUnmount() {
		  document.querySelector('body').className = '';
  }
  render() {
      return(
          <>
          <section className="ui fluid main-visual">
            <div className="bcg-base">
              <img
                className="bcg-image"
                src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
              />
              <div className="main-header">
                <h1>JK EXCELLENCE <span className="br">ENGLISH ARTICLES</span>
                <span className="br">FOR LEARNING</span>
                </h1>
              </div>
            </div>
          </section>
          <ContactForm />
          </>
      );
    }
}

export default Contact;