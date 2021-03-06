'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './menuItemComponent';

class HeaderSiteNav extends Component { 

  render() {
    return (
      <ul className='navbar-nav'>
        <MenuItem Component={NavLink} to="/" className='nav-item nav-link' activeClassName='header-active-link'>EPISODE</MenuItem>
      </ul>

    );
  }
}

export default HeaderSiteNav;
