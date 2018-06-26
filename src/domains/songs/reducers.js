import * as actions from './actionTypes';

const initialState = {
  list: [],
  data: {}
};

export default function songsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.songs
        }
      };
    default:
      return state;
  }
}
