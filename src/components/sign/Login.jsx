import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSign } from '../../redux/actions';

import '../../scss/sign/Login.scss';

const mapStateToProps = state => ({
  isUserLogged: state.isUserLogged
});

const mapDispatchToProps = dispatch => ({
  userSign: () => dispatch(userSign())
});

class Login extends Component {
  render() {
    return (
        <div>

        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);