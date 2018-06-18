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
    return store.dispatch(episodeActions.fetchOneEpisode());
  }

  render() {
    const {episode, editEpisode} = this.props;
    return (
      <div className='container'>
        <div className="row">
          <div className="col col-lg-12">
            <div className="card">
              <img className="card-img-top" src={episode.image_url} alt={episode.title} />
              <div className="card-body">
                <AudioPlayer episode={episode}/>
              </div>
              <div className="card-body">
                {!editEpisode && <Episode episode={episode} onEditEpisode={this.onEditEpisode}/>}
                {editEpisode && <EditEpisodeForm onSubmit={this.onSubmit}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {episodeDataState: {episode, editEpisode}} = state;
  return {
    episode: episode.episode,
    editEpisode
  };
};

function mapDispatchToProps(dispatch) {
  return {
    episodeActions: bindActionCreators(episodeActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeContainer);

     