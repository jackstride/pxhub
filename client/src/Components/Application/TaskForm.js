import React from 'react';

const TaskForm = () => {
  return (
    <form>
      <input placeholder="Enter your task" type="text" />
      <select>
        <option>Work</option>
        <option>Education</option>
        <option>In Progress</option>
      </select>
    </form>
  );
};

export default TaskForm;
