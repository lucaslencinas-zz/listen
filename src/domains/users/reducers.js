import * as actions from './actionTypes';

const initialState = {
  context: {}
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CONTEXT:
      return {
        ...state,
        context: action.context
      };
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
