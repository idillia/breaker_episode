'use strict';

import * as types               from '../actions/actionTypes';
import { episodeState }              from './initialState';

export default function userDataReducer(state = episodeState, action) {
  switch (action.type) {
    case types.EPISODE_REQUEST:
      return Object.assign({}, state, {
        isRequested: true
      });
    case types.EPISODE_RECEIVED:
      return Object.assign({}, state, {
        isRequested: false,
        episode: action.episode
      });
    case types.EPISODE_FAILURE:
      return Object.assign({}, state, {
        isRequested: false,
        errorMessage: action.errorMessage
      });
    case types.EDIT_EPISODE:
      return Object.assign({}, state, {
        editEpisode: action.editEpisode
      });
    case types.EPISODE_UPDATED:
      return Object.assign({}, state, {
        episode: action.episode,
      });
    case types.EPISODE_UPDATE_SUCCESSFUL:
      return Object.assign({}, state, {
        editEpisode: false
      });
    case types.EPISODE_UPDATE_REQUESTED:
      return Object.assign({}, state, {
        isRequested: true
      });
    case types.EPISODE_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isRequested: false,
        errorMessage: action.errorMessage
      });
    default:
      return state;
  }
}
