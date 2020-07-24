import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authRedcuer';
import taskReducer from './tasksReducer';
import taskSortReducer from './taskSortReducer';

// Import Reducers

// Persist Congit
const persistConfig = {
  // 'ROOT" = Localstorage KEY
  key: 'root',
  storage,
};

// Combine Reduecers
const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  sortTask: taskSortReducer,
});

export default persistReducer(persistConfig, rootReducer);
