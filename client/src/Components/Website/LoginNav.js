import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const LoginNav = ({ isAuth }) => {
  const handleCLick = () => {
    window.location.href = '/login';
  };
  return (
    <button id="login" onClick={handleCLick}>
      {isAuth ? 'Portal' : 'Sign in'}
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(LoginNav);
