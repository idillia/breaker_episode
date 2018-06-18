# Breaker Episode

## Requirements

For iOS:  
Node v9.3.0  
Yarn v1.7.0
Pm2  

- React
- Webpack
- Babel
- Express

## Development

### Installing Dependencies

$ cd breaker_episode  
$ yarn install  

#### To run dev mode
$ cd breaker_episode  
$ yarn web (starts webpack in watch mode)  
$ yarn dev (starts pm2 deamon and shows logs)  
$ yarn dd (stops pm2 deamon)  

#### To run production mode
$ cd breaker_episode 
$ yarn build (creates directory and files for production)  
$ yarn prod (starts pm2 deamon and runs in production mode)  
$ yarn dp (stops pm2 deamon)  

#### Completed
- [x] Used react, redux, redux-forms, react-router, isomorphic-fetch, react-soundplayer.
- [x] Created page that displays a single episode of a podcast. 
- [x] Created functionality to edit that episode.
- [x] Episode page includes: episode title, artwork, description, date published, link to edit the episode.
- [x] The fields are editable with simple validation and error description: title, description.
- [x] Episode page includes: audio player with playback progress bar and time, play/pause button, skip 15sec forward, skip 15sec back.
- [x] Web player is visible and continues playing even when episode is being edited.
- [x] Both pages use responcive approach (not tested extensivly on on mobile devices).


#### Unfinished
- [] Figure out correct way to update episode. 
- [] Add functionality to upload new artwork.
- [] Clean up css.


#### Improvements
- [] Apply professional design
- [] Design custom audio player based on sound cloud SDK.
- [] Get SoundCloud clientId (currently unavailable).