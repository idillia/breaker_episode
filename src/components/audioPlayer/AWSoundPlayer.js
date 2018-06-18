import React from 'react';
import { PlayButton, Timer, Progress, Icons, VolumeControl } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

const AWSSoundPlayer = withCustomAudio((props) => {
  const { track, currentTime, duration } = props;
  return (
    <div className="p2 border navy mt1 mb3 flex flex-center rounded mejs__controls">
      <div className='container'>
        <div className="mejs__controls">
          <PlayButton className="mejs__button playerBtn flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle" {...props} />
          <Timer className="mejs__time custom-player-timer" duration={track ? track.duration / 1000 : 0}  currentTime={currentTime} {...props} />
            <button type="button" className="sb-soundplayer-btn"><img className="skip" src="img/skip_back.png" /></button>
            <button type="button" className="sb-soundplayer-btn"><img className="skip" src="img/skip_forward.png" /></button>
          <Progress className="mejs__time-rail mt1 mb1 rounded" innerClassName="rounded-left" value={(currentTime / duration) * 100 || 0} {...props} />
          <VolumeControl className='mejs__volume-button playerBtn mr2 flex flex-center' buttonClassName="flex-none h6 button white btn-small button-outline button-grow bg-orange circle btn-square" {...props}/>
        </div>
      </div>
    </div>
  );
});


export default AWSSoundPlayer;
      
      // <Icons {...props}/>
