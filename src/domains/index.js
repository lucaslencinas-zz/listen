import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  actions as songsActions,
  selectors as songsSelectors,
  reducers as songsReducers
} from './songs';

import {
  actions as usersActions,
  selectors as usersSelectors,
  reducers as usersReducers
} from './users';

export const reducers = combineReducers({
  songs: songsReducers,
  users: usersReducers,
  routing: routerReducer
});

export const actions = {
  ...songsActions,
  ...usersActions
};

export const selectors = {
  ...songsSelectors,
  ...usersSelectors
};
