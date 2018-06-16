'use strict';

import React from 'react';

const MenuItem = ({Component, ...props}) => {

  const {className} = props;
  return (
    <li className={className}>
      <Component {...props}/>
    </li>
  );
};

export default MenuItem;