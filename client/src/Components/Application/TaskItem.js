import React from 'react';

const TaskItem = ({ data }) => {
  const getBackgroundColor = (cat) => {
    cat = cat.toLowerCase().replace(' ', '');
    switch (cat) {
      case 'work': {
        return '#df5e88EE';
      }
      case 'education': {
        return '#383e56EE ';
      }
      case 'inprogress': {
        return '#99b898EE';
      }
      default:
        return 'blue';
    }
  };

  return (
    <div className="item_container">
      <div className="custom_check">
        <input type="checkbox" />
        <span className="check" />
      </div>
      <p
        style={
          data.isCompleted
            ? { color: 'white', textDecoration: 'line-through' }
            : { color: 'white' }
        }
      >
        {data.title}
      </p>
      <div
        style={{ backgroundColor: getBackgroundColor(data.category) }}
        className="category"
      >
        <span>{data.category}</span>
      </div>
      <p>{data.date}</p>
      {/* <div className={data.isCompleted ? 'status isComplete' : 'status'}>
        <span>{data.isCompleted ? 'Completed' : 'Outstanding'}</span>
      </div> */}
    </div>
  );
};

export default TaskItem;
