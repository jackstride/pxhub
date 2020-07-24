import React, { useState, Fragment, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import Plus from '../../images/plus.svg';

const TasksHolder = ({
  getAllTasks,
  markTask,
  deleteTask,
  items,
  user_id,
  sortAllTasks,
}) => {
  const [showForm, setForm] = useState(false);
  const [showOptions, setOptions] = useState(false);
  const [selectValues, setSelectValues] = useState([]);

  useEffect(() => {
    getAllTasks(user_id);
  }, [getAllTasks, user_id]);

  const handleActions = () => {
    setSelectValues([]);
    document
      .querySelectorAll('input[type=checkbox]')
      .forEach((item) => (item.checked = false));
  };
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
            <div className="actions">
              <button onClick={() => handleActions(deleteTask(selectValues))}>
                Remove
              </button>
              <button
                onClick={() => handleActions(markTask(selectValues, true))}
              >
                Mark Complete
              </button>
              <button
                onClick={() => handleActions(markTask(selectValues, false))}
              >
                Mark To do
              </button>
            </div>
          ) : null}
        </div>
        <div className="filter">
          <h2 style={{ color: 'white' }}> Filter:</h2>
          <button onClick={() => sortAllTasks('SHOW_ALL')} className="filter">
            All
          </button>
          <button onClick={() => sortAllTasks('SHOW_TODO')} className="filter">
            To do
          </button>
          <button
            onClick={() => sortAllTasks('SHOW_COMPLETED')}
            className="filter"
          >
            Completed
          </button>
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

export default TasksHolder;
