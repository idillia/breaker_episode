'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

let myGet = { 
  method: 'GET',
  headers: {'User-Agent': 'Breaker/1.0.0 (0)'},
  mode: 'cors',
  cache: 'default'
};

export default {
  getOneEpisode: function() {
    return fetch('https://api.breaker.audio/shows/185226/episodes/29314799', myGet)
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
    return fetch('https://api.breaker.audio/shows/185226/episodes/29314799', 
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

