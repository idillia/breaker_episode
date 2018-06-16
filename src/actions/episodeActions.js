'use strict';

import * as types from './actionTypes';
import episodeApi from '../api-services/episodeApi';


function episodeDataRequested(){
  return {
    type: types.EPISODE_REQUEST,
    isRequested: true
  };
}

function episodeDataReceived(episode){
  console.log("d", episode)
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
      console.log("ep", episode)
      debugger
      dispatch(episodeDataReceived(episode));
    } catch (error) {
      console.log("er", error)
      debugger
      dispatch(episodeRequestFailure(error));
    }
  };
}


export function updateEpisode(episode) {
  return (dispatch) => {
    dispatch(episodeUpdateRequested());
    return episodeApi.updateEpisode(episode)
      .then((episode) => {
        dispatch(episodeUpdateSuccessful());
        dispatch(episodeUpdate(episode));
      })
      .catch((error) => dispatch(episodeUpdateFailure(error)));
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
