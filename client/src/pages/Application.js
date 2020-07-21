import React from 'react';
import Welcome from '../Components/Application/Welcome';
import TaskHolder from '../Components/Application/TasksHolder';

const Application = () => {
  return (
    <div className="application_container">
      <div className="inner_container">
        <Welcome />
        <TaskHolder />
      </div>
    </div>
  );
};

export default Application;
