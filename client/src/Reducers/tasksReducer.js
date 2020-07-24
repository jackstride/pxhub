import {
  GET_ALL_TASKS,
  ADD_TASK,
  MARK_TASK,
  DELETE_TASK,
  SHOW_ALL,
  SHOW_TODO,
  SHOW_COMPLETED,
} from '../Actions/types';

const initialState = {
  tasks: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case GET_ALL_TASKS: {
      return {
        tasks: action.payload,
      };
    }
    case MARK_TASK: {
      return {
        tasks: state.tasks.map((item, i) => {
          if (action.payload.values.includes(item.task_id)) {
            item.is_completed = action.payload.bool === 'true' ? true : false;
            console.log(state.tasks);
            return item;
          } else {
            return item;
          }
        }),
      };
    }
    case DELETE_TASK: {
      return {
        tasks: state.tasks.filter(
          (item) => !action.payload.includes(item.task_id)
        ),
      };
    }
    default:
      return {
        ...state,
      };
  }
};
