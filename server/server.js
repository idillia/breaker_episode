'use strict';

import express from 'express';
import config from './config';
import bodyParser from 'body-parser';
import logger from 'morgan';
import apiRouteConfig from './configurations/apiRoutesConfig';
import staticResourcesConfig from './configurations/staticResourcesConfig';
import responseHeaderConfig from './configurations/responseHeaderConfig';

const app = express();

staticResourcesConfig(app);
// responseHeaderConfig(app);

app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
  next();
});


apiRouteConfig(app);


app.listen(config.port, config.host, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Breaker is running at http://${config.host}:${config.port}`);
  }
});
