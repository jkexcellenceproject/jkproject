import React, { Component } from 'react';
import axios from 'axios';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            data: {
              yourName: '',
              yourEmail: '',
              _wpcf7: 21,
              _wpcf7_version: '5.1.3',
              _wpcf7_locale: 'en_US',
              _wpcf7_unit_tag: 'wpcf7-f21-p2-o1',
              _wpcf7_container_post: 2,
            }
          }
    }
    handleChange(event) {
        console.log(this.state.data);
        var data = this.state.data;
        switch (event.target.name) {
          case 'yourName':
            data.yourName = event.target.value;
            break;
          case 'yourEmail':
            data.yourEmail = event.target.value;
            break;
        }
        this.setState({
          data: data
        });
      }
      handleSubmit() {
        const formData = this.convertJsontoUrlencoded(this.state.data)
        const USER = "yasucom4646"
        const PASSWORD = "Z1AR B0wQ rWkT UE1P BnDO 305H"
        const TOKEN = window.btoa(`${USER}:${PASSWORD}`)
        const axiosConfig = {
          headers: {
            'Authorization': `Basic ${TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          }
        }
        axios.post(`http://wordpress.local.com:8888/wordpress/jk-wp/wp-json/contact-form-7/v1/contact-forms/21/feedback`, formData, axiosConfig)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });    
      }
      convertJsontoUrlencoded(obj) {
        let str = [];
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
              str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
          }
        }
        return str.join("&");
      }
    render() {
        return(
            <>
                <section className="content-padding blueGreen">
                  <h2>Contact</h2>
                  <form action="javaScript:void(0);" className="ui form container" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label>Full Name</label>
                      <input type="text" name="yourName" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                      <label>E-mail</label>
                      <input type="email" name="yourEmail" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                      <div className="ui checkbox">
                        <input type="checkbox" tabindex="0" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                      </div>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                  </form>
                </section>
            </>
        );
    }
}

export default ContactForm;