import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EpisodeContainer from '../components/episode/episodeContainer';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';

function BaseRoutes({ location }) {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} location={location} />
      <Route exact path='/episode' component={EpisodeContainer} location={location} />
      <Route path='/*' component={NotFoundPage} location={location} />
    </Switch>
  );
}

export default withRouter(connect()(BaseRoutes));