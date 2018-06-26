import * as actions from './actionTypes';
import * as songsService from '../../services/songsService';

export function fetchSongs() {
  return (dispatch) => (
    songsService.list()
      .then((songs) => (
        dispatch({
          type: actions.FETCH_SONGS_SUCCESS,
          songs
        })
      ))
  );
}
