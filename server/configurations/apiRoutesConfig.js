'use strict';

import wildcardRouter               from '../routes/wildcardRoute';
import cors                         from 'cors';
import episodeRouter                from '../routes/episodeRoute';

export default function ConfigApiRoutes(app) {
  app.use(cors());
  app.use(episodeRouter);
  app.use(wildcardRouter);
}