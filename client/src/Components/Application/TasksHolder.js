import React, { useState, Fragment } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import Plus from '../../images/plus.svg';

const TasksHolder = () => {
  const [showForm, setForm] = useState(false);
  const [showOptions, setOptions] = useState(false);
  const [items] = useState([
    {
      title: 'Walk the dog',
      category: 'Work',
      isCompleted: false,
      date: '2 Days ago',
    },
    {
      title: 'Write theseis',
      isCompleted: true,
      category: 'Education',
      date: '2 Days ago',
    },
    {
      title: 'Complete this project',
      isCompleted: true,
      category: 'In Progress',
      date: '2 Days ago',
    },
    {
      title: 'Get a new job',
      isCompleted: false,
      category: 'Work',
      date: '2 Days ago',
    },
  ]);
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
              <button>Remove</button>
              <button>Mark Complete</button>
              <button>Mark To do</button>
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
          {items.map((item) => (
            <TaskItem data={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TasksHolder;
