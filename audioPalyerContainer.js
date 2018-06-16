'use strict';

import React               from 'react';
import ReactAudioPlayer from 'react-audio-player';


const audioPlayerComponent = ({episode, onEditEpisode}) => {

  return (
    <div className='episode-details centered'>
      <div className='area-container_banner'>
        <h2>Episode</h2>
        <i onClick={onEditEpisode} className='fa fa-pencil-square-o fa-4x edit'></i>
      </div>
      <div className='area-container_body'>
      <ReactAudioPlayer
        src=episode.enclosure_url
        autoPlay
        controls
      />
      </div>
    </div>
  );
};

export default audioPlayerComponent;