'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './menuItemComponent';

class HeaderSiteNav extends Component { 
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ul className='navbar-nav'>
        <MenuItem Component={NavLink} to="/" className='nav-item nav-link'>Home</MenuItem>
        <MenuItem Component={NavLink} to="/episode" className='nav-item nav-link'>Episode</MenuItem>
      </ul>

    );
  }
}

export default HeaderSiteNav;

// activeClassName='header-active-link'