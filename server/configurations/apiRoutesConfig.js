'use strict';

import wildcardRouter               from '../routes/wildcardRoute';
import cors                         from 'cors';

export default function ConfigApiRoutes(app) {
  app.use(cors());
  app.use(wildcardRouter);
}