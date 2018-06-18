import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EpisodeContainer from '../components/episode/episodeContainer';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

function BaseRoutes({ location }) {
  return (
    <Switch>
      <Route exact path='/' component={EpisodeContainer} location={location} />
      <Route exact path='/about' component={AboutPage} location={location} />
      <Route path='/*' component={NotFoundPage} location={location} />
    </Switch>
  );
}

export default withRouter(connect()(BaseRoutes));