import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import Plus from '../../images/plus.svg';
import { getAllTasks, markTask, deleteTask } from '../../Actions/taskActions';

const TasksHolder = ({ getAllTasks, markTask, deleteTask, items, user_id }) => {
  const [showForm, setForm] = useState(false);
  const [showOptions, setOptions] = useState(false);
  const [selectValues, setSelectValues] = useState([]);

  useEffect(() => {
    getAllTasks(user_id);
  }, [getAllTasks, user_id]);

  useEffect(() => {}, [markTask]);
  return (
    <Fragment>
      <div className="menu">
        <div className="add">
          <button
            className="add"
            onClick={() => {
              setForm(!showForm);
            }}
          >
            <img src={Plus} alt="Add item" />
          </button>
          <button
            onClick={() => {
              setOptions(!showOptions);
            }}
            className="toggle"
          >
            Actions
          </button>
          {showOptions ? (
            <Fragment>
              <button onClick={() => deleteTask(selectValues)}>Remove</button>
              <button onClick={() => markTask(selectValues, 'true')}>
                Mark Complete
              </button>
              <button onClick={() => markTask(selectValues, 'false')}>
                Mark To do
              </button>
            </Fragment>
          ) : null}
        </div>
        <div className="filter">
          <h2 style={{ color: 'white' }}> Filter:</h2>
          <button className="filter">All</button>
          <button className="filter">To do</button>
          <button className="filter">Completed</button>
        </div>
      </div>
      <div className="task_holder">
        {showForm ? <TaskForm /> : null}
        <div className="task_items">
          {items &&
            items.map((item, i) => (
              <TaskItem
                key={i}
                data={item}
                selectValues={selectValues}
                setSelectValues={setSelectValues}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.user.user_id,
    items: state.tasks.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTasks: (user_id) => dispatch(getAllTasks(user_id)),
    markTask: (values, bool) => dispatch(markTask(values, bool)),
    deleteTask: (values) => dispatch(deleteTask(values)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TasksHolder);
