'use strict';

import React               from 'react';
import AWSSoundPlayer from './AWSoundPlayer';

let temp = 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3' //episode.enclosure_url

const audioPlayerComponent = ({episode}) => {
  return (
    <div className=''>
      <div className=''>
      </div>
      <div className=''>
        <AWSSoundPlayer
          streamUrl={episode.enclosure_url} />
      </div>
    </div>
  );
};

export default audioPlayerComponent;