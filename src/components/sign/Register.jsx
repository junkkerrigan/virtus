import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSign } from '../../redux/actions';

import '../../scss/sign/Register.scss';

const mapDispatchToProps = dispatch => ({
  userSign: currentUser => dispatch(userSign(currentUser))
});

class Register extends Component {
  state = {
    isFormSubmitted: false,
    isUsernameFree: false,
    passwordValidation: 'short'
  };

  onUsernameChange = event => {
    const username = event.target.value;
    let isUsernameFree=true;
    if (localStorage.getItem(username) || username.length===0) {
      isUsernameFree=false;
    }
    this.setState({
      isUsernameFree
    })
  };

  onPasswordChange = event => {
    const len = event.target.value.length;
    let passwordValidation='';
    if (len<6) passwordValidation='short';
    else if (len>20) passwordValidation='long';
    else passwordValidation='valid';
    this.setState({
      passwordValidation
    })
  };

  onFormSubmit = event => {
    event.preventDefault();
    const username = event.target[2].value,
      userData = {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[3].value
      };
    const { userSign } = this.props;
    const { isUsernameFree, passwordValidation } = this.state;
    if (isUsernameFree && passwordValidation==='valid') {
      userSign(username);
      localStorage.setItem(username, JSON.stringify(userData));
      localStorage.setItem('currentUser', username);
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  render() {
    const {
      isUsernameFree, passwordValidation, isFormSubmitted
    } = this.state;
    return (
      <div className='sign-tab'>
        <form className='sign-form' onSubmit={this.onFormSubmit}>
          <label className='sign-form-label'>
            <input
              className='sign-form-input'
              type='text'
              placeholder='Real name:'
            />
          </label>
          <label className='sign-form-label'>
            <input
              className='sign-form-input'
              type='email'
              placeholder='Email:'
            />
          </label>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input register username
                ${isUsernameFree? 'free' : 'busy'}`}
              type='text'
              placeholder='Username:'
              required
              onChange={this.onUsernameChange}
            />
            <span />
          </label>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input register password
                ${passwordValidation==='valid'? 'valid' :
                  passwordValidation==='short'? 'short' : 'long'}`}
              type='password'
              placeholder='Password:'
              required
              onChange={this.onPasswordChange}
            />
            <span />
          </label>
          <button type='submit' className='sign-form-submit shadow-wrapper'>
            Enter
          </button>
        </form>
        {
          isFormSubmitted && <Redirect to='/home' />
        }
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Register);


