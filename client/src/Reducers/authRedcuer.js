import { USER_LOGIN, USER_LOGOUT } from '../Actions/types';

const intitialState = {
  isAuthenticated: null,
  user: null,
};

export default (state = intitialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case USER_LOGOUT: {
      return {
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
