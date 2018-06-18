'use strict';

import * as types from './actionTypes';
import episodeApi from '../api-services/episodeApi';
import mockApi from '../api-services/mockApi';

// console.log(mockApi.getMockEpisode())


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
      console.log('got an episode');
      // console.log('about to get mock episode');
      // const episode = await mockApi.getMockEpisode();
      // console.log("ep", episode)
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
        console.log('successfull update');
        dispatch(episodeUpdateSuccessful());
        dispatch(episodeUpdate(episode));
      })
      .catch((error) => {
        console.log('error while updating', error);
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
