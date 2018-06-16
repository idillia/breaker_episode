'use strict';

import React, {Component}    from 'react';
import {bindActionCreators}             from 'redux';
import Episode                          from './episodeComponent';
import AudioPlayer             from '../audioPlayer/audioPlayerComponent';
import EditEpisodeForm                  from './editEpisodeComponent';
import {connect}                        from 'react-redux';
import * as episodeActions                 from '../../actions/episodeActions';

class EpisodeContainer extends Component {
  constructor(props) {
    super(props);
    this.onEditEpisode = this.onEditEpisode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEditEpisode() {
    const {episodeActions} = this.props;
    episodeActions.editEpisode(true);
  }

  onSubmit(formData) {
    const {episodeActions} = this.props;
    event.preventDefault();
    episodeActions.updateEpisode(formData);
  }

  static fetchData(store) {
    console.log('fetchData is called')
    return store.dispatch(episodeActions.fetchOneEpisode());
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   debugger;
  //   this.props.episodeActions.fetchOneEpisode();
  // }


  render() {
    const {episode, editEpisode} = this.props;
    // console.log(this.props);
    return (
      <div className='area-container flex-column'>
        {!editEpisode && <Episode episode={episode} onEditEpisode={this.onEditEpisode}/>}
        {editEpisode && <EditEpisodeForm onSubmit={this.onSubmit}/>}
        <AudioPlayer episode={episode}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  const {episodeDataState: {episode, editEpisode}} = state;
  return {
    episode: episode.episode,
    editEpisode
  };
};

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return {
    episodeActions: bindActionCreators(episodeActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeContainer);

     