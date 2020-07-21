import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import Reducers

// Persist Congit
const persistConfig = {
  // 'ROOT" = Localstorage KEY
  key: 'root',
  storage,
};

// Combine Reduecers
const rootReducer = combineReducers({});

export default persistReducer(persistConfig, rootReducer);
