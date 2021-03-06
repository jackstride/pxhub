import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authRedcuer';
import taskReducer from './tasksReducer';

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
});

export default persistReducer(persistConfig, rootReducer);
