import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RedirectToArticlesPage = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 302;
      }
      return <Redirect from="/" to="/episodes/29314799" />;
    }}/>
  );
};

export default RedirectToArticlesPage;
