'use strict';

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseRoutes from '../routing/BaseRoutes.js';
import Header from './common/header/headerContainer';


class Base extends React.Component {
  render() {
    return (
      <div className="site-wrapper">
        <Header />
        <main className="content-wraper">
          <BaseRoutes location={this.props.location} />
        </main>
      </div>
    );
  }
}

export default withRouter(connect()(Base));
