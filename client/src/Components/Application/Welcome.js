import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../images/logo.svg';

const Welcome = ({ firstName, taskCount }) => {
  const getLength = (count) => {
    return count ? count.length : 0;
  };

  const getCompleted = (count) => {
    return count ? count.filter((item) => item.is_completed).length : 0;
  };

  return (
    <div className="welcome_container">
      <div className="welcome_img">
        <img src={Logo} alt="logo" />
      </div>
      <div className="message">
        <h1> Hey {firstName},</h1>
      </div>
      <div className="tasks_count">
        <p>{getLength(taskCount)} Tasks</p>
        <p> {getCompleted(taskCount)} Completed</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.auth.user.first_name,
    taskCount: state.tasks.tasks,
  };
};

export default connect(mapStateToProps, null)(Welcome);
