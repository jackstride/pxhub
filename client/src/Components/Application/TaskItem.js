import React from 'react';
import moment from 'moment';

const TaskItem = ({ data, selectValues, setSelectValues }) => {
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
        <input
          type="checkbox"
          value={data.task_id}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectValues([...selectValues, e.target.value]);
            } else {
              setSelectValues(
                selectValues.filter((item) => item !== e.target.value)
              );
            }
          }}
        />
        <span className="check" />
      </div>
      <p
        style={
          data.is_completed
            ? { color: 'white', textDecoration: 'line-through' }
            : { color: 'white' }
        }
      >
        {data.task_title}
      </p>
      <div
        style={{ backgroundColor: getBackgroundColor(data.task_category) }}
        className="category"
      >
        <span>{data.task_category}</span>
      </div>
      <p>{moment(data.task_date).calendar()}</p>
      {/* <div className={data.isCompleted ? 'status isComplete' : 'status'}>
        <span>{data.isCompleted ? 'Completed' : 'Outstanding'}</span>
      </div> */}
    </div>
  );
};

export default TaskItem;
