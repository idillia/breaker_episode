'use strict';

import {Router}                                  from 'express';
import cors                                      from 'cors';

const episodeRouter = Router();

episodeRouter.route('https://api.breaker.audio/shows/185226/episodes/29314799')
  .patch(cors(), async function(req, res, next){
    try {
      const {episode} = req.body;
      if(!episode){return res.sendStatus(304);}

      return res.status(200);
    }

    catch (err) {
      console.log("err in routes", err)
    }
  })

  export default episodeRouter