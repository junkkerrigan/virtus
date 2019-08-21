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
    isUsernameAvailable: undefined,
    username: '',
    password: '',
    remember: false,
  };

  onInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  onCheckboxChange = event => {
    const { remember } = this.state;

    this.setState({
      remember: !remember
    })
  };

  onFormSubmit = event => {
    event.preventDefault();

    const { username, password, remember } = this.state;
    const { userSign } = this.props;

    if (localStorage.getItem(username)) {
      this.setState({
        isUsernameAvailable: 'available'
      });
      const userData = JSON.parse(localStorage.getItem(username));
      if (userData.password === password) {
        userSign(username);
        this.setState({
          isFormSubmitted: true
        });
        if (remember) {
          localStorage.setItem('currentUser', username);
        } else {
          sessionStorage.setItem('currentUser', username);
        }
      } else {
        this.setState({
          isPasswordCorrect: 'incorrect'
        })
      }
    } else {
      this.setState({
        isUsernameAvailable: 'unavailable',
        isPasswordCorrect: undefined,
      })
    }
  };

  render() {
    const {
      isFormSubmitted, isPasswordCorrect, isUsernameAvailable, username, password, remember
    } = this.state;

    let usernameStatus = '';
    if (isUsernameAvailable) {
      usernameStatus = ` ${isUsernameAvailable}`;
    }

    console.log(isPasswordCorrect);

    return (
      <div className='sign-tab'>
        <form className='sign-form' onSubmit={this.onFormSubmit}>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input login username${usernameStatus}`}
              type='text'
              placeholder='Username:'
              required
              name='username'
              onChange={this.onInputChange}
              value={username}
            />
            <span />
          </label>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input login password${isPasswordCorrect? ' incorrect' : ''}`}
              type='password'
              placeholder='Password:'
              required
              name='password'
              onChange={this.onInputChange}
              value={password}
            />
            <span />
          </label>
          <label className='sign-form-label checkbox-label'>
            <input
              className='sign-form-checkbox'
              type='checkbox'
              onChange={this.onCheckboxChange}
              name='remember'
              value={remember}
            />
            Remember me
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
