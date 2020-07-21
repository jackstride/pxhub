import {} from '../Actions/types';

const initialState = {
  tasks: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'test': {
      return {};
    }
    default:
      return {
        state,
      };
  }
};
