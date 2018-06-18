import React, {Component}    from 'react';
import { withCustomAudio } from 'react-soundplayer/addons';

class Skip extends Component {

  constructor(props) {
    super(props);
    this.state = {...props};
    console.log(this.state);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("clicked", this.props.props.currentTime);
    console.log("duration", this.props.props.duration);
    console.log("state", this.state.currentTime = 5);

    // const {episodeActions} = this.props;
    // event.preventDefault();
    // episodeActions.updateEpisode(formData);
  }

  render() {
    console.log('p', this.props)
    const { track, currentTime, duration } = this.props;

    return (
      <div>
        <button type="button" className="sb-soundplayer-btn" currentime={this.state.currentTime}  onClick={this.onClick}><img className="skip" src="img/skip_back.png" /></button>
      </div>
    );
  }
}

export default withCustomAudio(Skip);