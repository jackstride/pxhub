import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../Actions/authActions';
import { connect } from 'react-redux';

const LoginNav = ({ isAuth, logout }) => {
  const handleCLick = () => {
    window.location.href = '/login';
  };
  return (
    <Fragment>
      <button id="login" onClick={handleCLick}>
        {isAuth ? 'Portal' : 'Sign in'}
      </button>
      {isAuth && (
        <button style={{ marginLeft: '10px' }} onClick={() => logout()}>
          Logout
        </button>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginNav);
