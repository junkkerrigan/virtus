import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSign } from '../../redux/actions';

import '../../scss/sign/Register.scss';

const usernameValidator = username => {
  if (username !== '') {
    return (localStorage.getItem(username))? 'busy' : 'free';
  }
  return '';
};

const passwordValidator = password => {
  const { length } = password;

  if (password !== '') {
    if (length > 20) {
      return 'long';
    } else if (length < 6) {
      return  'short';
    } else {
      return 'valid';
    }
  }
  return '';
};

class Register extends Component {
  state = {
    isFormSubmitted: false,
    username: '',
    password: '',
    email: '',
    name: '',
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  onFormSubmit = event => {
    event.preventDefault();

    const { username, password, name, email } = this.state;
    const userData = {
        name,
        email,
        password,
    };

    const { userSign } = this.props;
    if (
      usernameValidator(username) === 'free' &&
      passwordValidator(password) === 'valid'
    ) {
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
      isFormSubmitted, email, name, password, username
    } = this.state;

    let passwordStatus = passwordValidator(password);
    if (passwordStatus !== '') {
      passwordStatus = ` ${passwordStatus}`;
    }

    let usernameStatus = usernameValidator(username);
    if (usernameStatus !== '') {
      usernameStatus = ` ${usernameStatus}`;
    }

    return (
      <div className='sign-tab'>
        <form className='sign-form' onSubmit={this.onFormSubmit}>
          <label className='sign-form-label'>
            <input
              className='sign-form-input'
              type='text'
              placeholder='Real name:'
              onChange={this.onInputChange}
              name='name'
              value={name}
            />
          </label>
          <label className='sign-form-label'>
            <input
              className='sign-form-input'
              type='email'
              placeholder='Email:'
              onChange={this.onInputChange}
              name='email'
              value={email}
            />
          </label>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input register username${usernameStatus}`}
              type='text'
              placeholder='Username:'
              required
              onChange={this.onInputChange}
              name='username'
              value={username}
            />
            <span />
          </label>
          <label className='sign-form-label'>
            <input
              className={`sign-form-input register password${passwordStatus}`}
              type='password'
              placeholder='Password:'
              required
              onChange={this.onInputChange}
              name='password'
              value={password}
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


const mapDispatchToProps = dispatch => ({
  userSign: currentUser => dispatch(userSign(currentUser))
});

export default connect(null, mapDispatchToProps)(Register);


