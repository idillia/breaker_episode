'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

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
        // console.log('getOneEpisode:', response);
        return response.json();
      })
      .then(function(stories) {
        // console.log("stories", stories);
        return stories;
      })
      .catch(function (err){
        console.log('fetching err', err);
        throw err;
      });
  },
  updateOneEpisode: function(data) {
    console.log("passed data", data)
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
        // return response.json();
      })
      .catch(function (err){
        console.log('update err', err);
        throw err;
      });
  }

};

// import * as axios from 'axios';
// // import config from './applicationSettings';
// // const client = axios.create({baseURL: `http://${config.host}:${config.port}`});
// const client = axios.create({
//   baseURL: 'https://api.breaker.audio', 
//   headers: {'User-Agent': 'Breaker/1.0.0 (0)'}
// });


// export default {
//   getOneEpisode: function () {

//     return client.get('/shows/185226/episodes/29314799')
//       .then(function(response){
//         console.log('getOneEpisode:', response);
//         return response.data;
//       })
//       .catch(function(err){
//         console.log('some err:', err);

//         throw err;
//       });
//   },

//   // updateEpisode: function (episode) {
//   //   return client.patch({episode: episode})
//   //     .then(function (response) {
//   //       return response.data;
//   //     })
//   //     .catch(function (err){
//   //       throw err;
//   //     });
//   // }
// };

