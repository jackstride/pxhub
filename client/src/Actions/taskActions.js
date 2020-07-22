import axios from 'axios';
import { ADD_TASK, GET_ALL_TASKS, MARK_TASK, DELETE_TASK } from './types';

export const addTask = (values) => (dispatch) => {
  axios
    .post(`/task/add`, values)
    .then((res) => {
      dispatch({
        type: ADD_TASK,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllTasks = (user_id) => (dispatch) => {
  axios.get(`/task/all/${user_id}`).then((res) => {
    dispatch({
      type: GET_ALL_TASKS,
      payload: res.data.tasks,
    });
  });
};

export const markTask = (values, bool) => (dispatch) => {
  console.log(values, bool);
  axios
    .patch('/task/mark_complete', {
      data: {
        task_id: values,
        bool,
      },
    })
    .then((res) => {
      dispatch({
        type: MARK_TASK,
        payload: { values, bool },
      });
    });
};

export const deleteTask = (values) => (dispatch) => {
  axios
    .delete('/task/delete', {
      data: {
        task_id: values,
      },
    })
    .then((res) => {
      dispatch({
        type: DELETE_TASK,
        payload: values,
      });
    });
};
