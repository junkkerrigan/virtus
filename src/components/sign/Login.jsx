import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSign } from '../../redux/actions';

import '../../scss/sign/Login.scss';


const mapDispatchToProps = dispatch => ({
  userSign: currentUser => dispatch(userSign(currentUser))
});

class Login extends Component {
  state = {
    isFormSubmitted: false,
    isPasswordCorrect: undefined,
    isUsernameAvailable: undefined
  };

  onFormSubmit = event => {
    event.preventDefault();
    const username = event.target[0].value,
      password = event.target[1].value;
    const { userSign } = this.props;
    if (localStorage.getItem(username)) {
      this.setState({
        isUsernameAvailable: 'available'
      });
      const userData = JSON.parse(localStorage.getItem(username));
      if (userData.password===password) {
        userSign(username);
        this.setState({
          isFormSubmitted: true
        })
      } else {
        this.setState({
          isPasswordCorrect: 'incorrect'
        })
      }
    } else {
      this.setState({
        isUsernameAvailable: 'unavailable'
      })
    }
  };

  render() {
    const {
      isFormSubmitted, isPasswordCorrect, isUsernameAvailable
    } = this.state;
    return (
      <div className='sign-tab'>
        <form className='sign-form' onSubmit={this.onFormSubmit}>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input login username
                ${isUsernameAvailable? isUsernameAvailable==='available'?
                  'available' : 'unavailable' : ''}`}
              type='text'
              placeholder='Username:'
              required
              onChange={this.onUsernameChange}
            />
            <span />
          </label>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input login password
                ${isPasswordCorrect? 'incorrect' : ''}`}
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

export default connect(null, mapDispatchToProps)(Login);