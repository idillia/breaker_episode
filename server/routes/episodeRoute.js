'use strict';

import {Router}                                  from 'express';
import cors                                      from 'cors';

const episodeRouter = Router();

episodeRouter.route('/api/episode?')
  .get(cors(), async function(req, res, next){
    try {
      const {episode} = req.body;
      if(!episode){return res.sendStatus(304);}

      return res.status(200);
    }
    catch (err) {
      console.log("err in routes", err)
    }
  })


  export default episodeRouter;