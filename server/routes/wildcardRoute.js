'use strict';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { ConnectedRouter, push } from 'react-router-redux';
import routes from '../../src/routing/serverRoutes.js';
import configureStore from '../../src/store.js';
import qs from 'qs';



const wildCardRouter = express.Router();

wildCardRouter.route('*')
  .get(async (req, res) => {
    let episode = {};
    const { store, history } = configureStore({episodeDataState: {episode: episode, editEpisode: false}}, 'fromServer');
    const branch = matchRoutes(routes, req.url);

    const promises = branch.map(({route, match}) => {
      let fetchData = route.component.fetchData;
      return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    });

    return Promise.all(promises).then((data) => {
      store.dispatch(push(req.originalUrl)); 
      let context = {};
      const content = renderToString(
        <Provider store={store}>  
          <ConnectedRouter history={history} context={context}>
            {renderRoutes(routes)}
          </ConnectedRouter> 
        </Provider>   
      );
      if (context.status === 404) {
        res.status(404);
      }
      if (context.status === 302) {
        return res.redirect(302, context.url);
      }
      var serializedData = serialize(store.getState());
      res.render('index', {title:'Breaker Episode', data: serializedData, content});
    });
  });


export default wildCardRouter;