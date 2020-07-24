import {
  GET_ALL_TASKS,
  ADD_TASK,
  MARK_TASK,
  DELETE_TASK,
  SHOW_ALL,
  SHOW_TODO,
  SHOW_COMPLETED,
  SET_TASK_SORT,
} from '../Actions/types';

const initialState = {
  tasks: null,
  filter: SHOW_ALL,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case GET_ALL_TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case MARK_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((item, i) => {
          if (action.payload.values.includes(item.task_id)) {
            item.is_completed = action.payload.bool;
            return item;
          } else {
            return item;
          }
        }),
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(
          (item) => !action.payload.includes(item.task_id)
        ),
      };
    }
    case SET_TASK_SORT: {
      return {
        ...state,
        filter: action.filter,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
