import { connect } from 'react-redux';
import TasksHolder from '../Components/Application/TasksHolder';
import { getAllTasks, markTask, deleteTask } from '../Actions/taskActions';
import { SHOW_COMPLETED, SHOW_TODO, SHOW_ALL } from '../Actions/types';

const sortTasks = (tasks, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return tasks.filter((item) => item.is_completed);
    case SHOW_TODO:
      return tasks.filter((item) => !item.is_completed);
    case SHOW_ALL:
      return tasks;
  }
};

const mapStateToProps = (state) => ({
  user_id: state.auth.user.user_id,
  items: sortTasks(state.tasks.tasks, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: (user_id) => dispatch(getAllTasks(user_id)),
  markTask: (values, bool) => dispatch(markTask(values, bool)),
  deleteTask: (values) => dispatch(deleteTask(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksHolder);
