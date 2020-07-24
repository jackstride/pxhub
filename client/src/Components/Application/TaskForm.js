import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../Actions/taskActions';
import useForm from '../../Hooks/useForm';

const TaskForm = ({ user_id, addTask }) => {
  const handleTaskSubmit = (e) => {
    values.user_id = user_id;
    if (!values.task_category) {
      values.task_category = 'work';
    }
    addTask(values);
  };
  const [values, handleChange, handleSubmit] = useForm(handleTaskSubmit);

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        placeholder="Enter your task"
        onChange={handleChange}
        name="task_title"
        value={values.task_title || ''}
        type="text"
      />
      <select
        name="task_category"
        onChange={handleChange}
        value={values.task_category || ''}
      >
        <option value="Work">Work</option>
        <option value="Education">Education</option>
        <option value="In progress">In Progress</option>
      </select>
      <input type="submit" name="submit" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.user.user_id,
  };
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    addTask: (values) => dispatch(addTask(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
