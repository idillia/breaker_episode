import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EpisodeContainer from '../components/episode/episodeContainer';
import NotFoundPage from '../components/NotFoundPage';


function BaseRoutes({ location }) {
  return (
    <Switch>
      <Route exact path='/' component={EpisodeContainer} location={location} />
      <Route path='/*' component={NotFoundPage} location={location} />
    </Switch>
  );
}

export default withRouter(connect()(BaseRoutes));
