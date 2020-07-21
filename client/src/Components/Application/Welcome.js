import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../images/logo.svg';

const Welcome = ({ firstName }) => {
  return (
    <div className="welcome_container">
      <div className="welcome_img">
        <img src={Logo} alt="logo" />
      </div>
      <div className="message">
        <h1> Hey {firstName},</h1>
      </div>
      <div className="tasks_count">
        <p>14 Tasks</p>
        <p> 4 Completed</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.auth.user.first_name,
  };
};

export default connect(mapStateToProps, null)(Welcome);
