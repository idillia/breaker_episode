'use strict';

import React               from 'react';
import ReactAudioPlayer from 'react-audio-player';


const audioPlayerComponent = ({episode}) => {
  console.log("e", episode.enclosure_url)
  return (
    <div className='episode-details centered'>
      <div className='area-container_banner'>
        <h2>Listen</h2>
      </div>
      <div className='area-container_body'>
      <ReactAudioPlayer
        src='http://feeds.soundcloud.com/stream/368129684-shouldwe-no-41-change-everything.mp3'
        autoPlay
        controls
        crossOrigin="anonymous"
      />
      </div>
    </div>
  );
};

export default audioPlayerComponent;

     