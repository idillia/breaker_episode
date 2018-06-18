'use strict';

import React, {Component}       from 'react';
import HeaderSiteNav                       from './headerSiteNavComponent';

class Header extends Component {
  render() {

    return (
      <nav className='navbar nav-menu fixed-top navbar-expand-md navbar-light bg-light justify-content-between header-nav-container'>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
          <HeaderSiteNav />
        </div>
      </nav>
    );
  }
}

export default (Header);