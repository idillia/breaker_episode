'use strict';

import React               from 'react';
import SoundPlayer from './SoundPlayer';


const audioPlayerComponent = ({episode}) => {
  return (
    <div className=''>
      <SoundPlayer streamUrl={episode.enclosure_url} />
    </div>
  );
};

export default audioPlayerComponent;