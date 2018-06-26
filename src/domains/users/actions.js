import * as actions from './actionTypes';
import { selectors } from '../index';
import * as usersService from '../../services/usersService';

export function setContext(context) {
  return (dispatch) => (
    dispatch({
      type: actions.SET_CONTEXT,
      context
    })
  );
}

export function fetchUser() {
  return (dispatch, getState) => {
    const state = getState();
    const context = selectors.context(state);

    return usersService.me(context)
      .then((user) => (
        dispatch({
          type: actions.FETCH_USER_SUCCESS,
          user
        })
      ));
  };
}
