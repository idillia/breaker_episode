'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';


let url = 'https://api.breaker.audio/shows/';
let show_id = 185226;
let episode_id = 29314799;
let myGet = { 
  method: 'GET',
  headers: {'User-Agent': 'Breaker/1.0.0 (0)'},
  mode: 'cors',
  cache: 'default'
};

export default {
  getOneEpisode: function() {
    return fetch(`${url}${show_id}/episodes/${episode_id}`, myGet)
      .then(function(response){
        return response.json();
      })
      .then(function(stories) {
        return stories;
      })
      .catch(function (err){
        throw err;
      });
  },
  updateOneEpisode: function(data) {
    return fetch(`${url}${show_id}/episodes/${episode_id}`, 
      { 
        method: 'PATCH',
        headers: {'User-Agent': 'Breaker/1.0.0 (0)', 'Content-Type': 'application/json', 'Accept': 'application/json'},
        credentials: 'include',
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(data) 
      })
      .then(function(response){
        console.log('updateEpisode:', response);
      })
      .catch(function (err){
        throw err;
      });
  }
};

