'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

var myInit = { method: 'GET',
               headers: {
                   'User-Agent': 'Breaker/1.0.0 (0)'
               },
               mode: 'cors',
               cache: 'default' };

export default {
  getOneEpisode: function() {
    return fetch('https://api.breaker.audio/shows/185226/episodes/29314799', myInit)
      .then(function(response){
        console.log('getOneEpisode:', response);
        return response.json();
      })
      .then(function(stories) {
        console.log("stories", stories);
        return stories;
      })
      .catch(function (err){
        console.log('err', err);
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

