'use strict';

import * as types from './actionTypes';
import episodeApi from '../api-services/episodeApi';
import mockApi from '../api-services/mockApi';

function episodeDataRequested(){
  return {
    type: types.EPISODE_REQUEST,
    isRequested: true
  };
}

function episodeDataReceived(episode){
  return {
    type: types.EPISODE_RECEIVED,
    isRequested: false,
    episode
  };
}

function episodeRequestFailure(error){
  return {
    type: types.EPISODE_FAILURE,
    isRequested: false,
    error
  };
}

function episodeUpdateRequested() {
  return {
    type: types.EPISODE_UPDATE_REQUESTED,
    isRequested: true
  };
}

function episodeUpdateSuccessful() {
  return {
    type: types.EPISODE_UPDATE_SUCCESSFUL,
    isRequested: false
  };
}

function episodeUpdateFailure(errorMessage) {
  return {
    type: types.EPISODE_UPDATE_FAILURE,
    errorMessage
  };
}

function episodeUpdate(episode){
  return {
    type: types.EPISODE_UPDATED,
    episode
  };
}

export function fetchOneEpisode() {
  return async function (dispatch) {
    dispatch(episodeDataRequested());
    try {
      const episode = await episodeApi.getOneEpisode();
      // const episode = await mockApi.getMockEpisode();
      dispatch(episodeDataReceived(episode));
    } catch (error) {
      dispatch(episodeRequestFailure(error));
    }
  };
}


export function updateEpisode(episode) {
  return async (dispatch) => {
    dispatch(episodeUpdateRequested());
    return episodeApi.updateOneEpisode(episode)
      .then((episode) => {
        dispatch(episodeUpdateSuccessful());
        dispatch(episodeUpdate(episode));
      })
      .catch((error) => {
        console.log('Error during update. ', error);
        dispatch(episodeUpdateFailure(error));
      });
  };
}

export function editEpisode(edit) {
  return (dispatch) =>  {
    dispatch({
      type: types.EDIT_EPISODE,
      editEpisode: edit
    });
  };
}
