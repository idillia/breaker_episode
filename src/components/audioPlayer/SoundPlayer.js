import React from 'react';
import { PlayButton, Timer, Progress, VolumeControl } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

const SoundPlayer = withCustomAudio((props) => {
  const { track, currentTime, duration, soundCloudAudio } = props;
  const skipForward = () => {
    soundCloudAudio.audio.currentTime = soundCloudAudio.audio.currentTime + 15;
  };
  const skipBack = () => {
    soundCloudAudio.audio.currentTime = soundCloudAudio.audio.currentTime - 15;
  };

  return (
    <div className="p1 mb3 mt1 flex flex-center bg-darken-1 red rounded mejs__controls">
      <div className='container'>
        <div className="mejs__controls">
          <PlayButton className="mejs__button playerBtn flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle" {...props} />
          <Timer className="mejs__time custom-player-timer" duration={track ? track.duration / 1000 : 0}  currentTime={currentTime} {...props} />
          <button className="sb-soundplayer-btn flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle" type="button" onClick={() => skipBack()} currenttime={currentTime}><img className="skip" src="/img/skip_back.png" /></button>
          <button type="button" onClick={() => skipForward()} className="sb-soundplayer-btn flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle" currenttime={currentTime}><img className="skip" src="/img/skip_forward.png" /></button>
         <Progress className="mejs__time-rail mt1 mb1 rounded" innerClassName="rounded-left progress" value={(currentTime / duration) * 100 || 0} {...props} />
        </div>
      </div>
    </div>
  );
});


export default SoundPlayer;    

//TODO: fix css for VolumeControl
// <VolumeControl className='mejs__volume-button playerBtn mr2 flex flex-center' buttonClassName="flex-none h6 button white btn-small button-outline button-grow bg-orange circle btn-square" {...props}/>