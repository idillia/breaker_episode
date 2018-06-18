'use static';

import path                         from 'path';
import express                      from 'express';

const staticResourcesConfig = (app) => {
  if (process.env.NODE_ENV == 'production') {
    app.use('/fonts/', express.static(path.join(__dirname, '../..', './src/assets/fonts')));
    app.use('/img/', express.static(path.join(__dirname, '../..', './src/assets/images')));
    app.use('/styles/', express.static(path.join(__dirname, '../..', './src/assets/styles')));
    app.use('/myscripts/', express.static(path.join(__dirname, '../..', './src/assets/js')));
    app.use('/scripts/', express.static(path.join(__dirname, '../../..', './node_modules')));
    express.static.mime.define({'text/css': ['css']});
    express.static.mime.define({'application/x-font-woff': ['woff']});
    express.static.mime.define({'application/x-font-ttf': ['ttf']});
    express.static.mime.define({'application/vnd.ms-fontobject': ['eot']});
    express.static.mime.define({'font/opentype': ['otf']});
    app.use(express.static(path.join(__dirname,  '../../..', './public')));
  } else {
    app.use('/styles/', express.static(path.join(__dirname, '../..', './src/assets/styles')));
    app.use('/img/', express.static(path.join(__dirname, '../..', './src/assets/images')));
    app.use('/myscripts/', express.static(path.join(__dirname, '../..', './src/assets/js')));
    app.use('/scripts/', express.static(path.join(__dirname, '../..', './node_modules')));
    express.static.mime.define({'text/css': ['css']});
    express.static.mime.define({'application/x-font-woff': ['woff']});
    express.static.mime.define({'application/x-font-ttf': ['ttf']});
    express.static.mime.define({'application/vnd.ms-fontobject': ['eot']});
    express.static.mime.define({'font/opentype': ['otf']});
    app.use(express.static(path.join(__dirname,  '../..', './public')));
  }
};

export default staticResourcesConfig;