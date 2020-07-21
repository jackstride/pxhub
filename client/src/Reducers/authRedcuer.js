import { USER_LOGIN } from '../Actions/types';

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
    default: {
      return state;
    }
  }
};
