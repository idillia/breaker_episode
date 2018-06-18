'use strict';

import React from 'react';
import moment from 'moment';


const EpisodeComponent = ({episode, onEditEpisode}) => {
  let dateFormated = moment(episode.published_at).format('MMMM Do YYYY, h:mm:ss a'); 

  return (
    <div className='container_position'>
      <div className="card-body episode-details">
        <button type="button" className="sb-soundplayer-btn edit_icon" onClick={onEditEpisode}><img className="skip" src="/img/edit_1.png" /></button>
        <h5 className="title">{episode.title}</h5>
        <p className="published_at">Published on {dateFormated}</p>
        <p className="description">{episode.stripped_description}</p>
      </div>
    </div>
  );
};

export default EpisodeComponent;
