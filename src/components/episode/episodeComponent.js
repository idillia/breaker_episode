'use strict';

import React               from 'react';

const EpisodeComponent = ({episode, onEditEpisode}) => {

  return (
    <div className='episode-details centered'>
      <div className='area-container_banner'>
        <h2>Episode</h2>
        <i onClick={onEditEpisode} className='fa fa-pencil-square-o fa-4x edit'></i>
      </div>
      <div className='area-container_body '>
        <table className='table'>
          <tbody>
            <tr>
              <td>Title:</td>
              <td>{episode.title}</td>
            </tr>
            <tr>
              <td>Artwork:</td>
              <td>{episode.image_url}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{episode.stripped_description}</td>
            </tr>
            <tr>
              <td>Date published:</td>
              <td>{episode.published_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodeComponent;