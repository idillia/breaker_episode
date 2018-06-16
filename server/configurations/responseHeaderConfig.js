// 'use strict';

// import helmet       from 'helmet';

// const responseHeaderConfig = (app) => {
//   app.use(helmet.xssFilter());

//   app.use(helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
//       styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
//       imgSrc: ["'self'", "data:"],
//       fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
//       connectSrc: ["'self'", "http://localhost:3007"],
//       // reportUri: "/cspviolation"
//     },
//   }));
// };

// export default responseHeaderConfig;