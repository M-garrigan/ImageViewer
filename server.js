
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');

const Path = require('path');
const pug = require('pug');

// static routes
const svgObj = require('./routes/svgs.js');
const cssObj = require('./routes/css.js');
const jsObj = require('./routes/js.js');
const pugObj = require('./routes/pug.js');

// api data object
const apiData = require('./apiData.js');

// handlers
const esHandler = require('./handlers/esHandler.js');
const hapiHandler = require('./handlers/hapiHandler.js');
const pugHandler = require('./handlers/pugHandler.js');
const reduxHandler = require('./handlers/reduxHandler.js');
const rootHandler = require('./handlers/rootHandler.js');

const { initES, createES } = require('./es.js');

const startServer = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 8008
  });

  await server.register([Inert, Vision]);

  server.views({
    engines: {
      pug: require('pug')
    },
    relativeTo: __dirname,
    path: 'templates/pages/'
  });

  // static svg files
  server.route({
    method: 'GET',
    path: '/svgs/{file}',
    handler: (request, h) => {
      let file = request.params.file;
      
      if (svgObj[file]) {
        return h.file(`public/svgs/${svgObj[file]}`);
      } 
    }
  });

  // static css files
  server.route({
    method: 'GET',
    path: '/styles/{file}',
    handler: (request, h) => {
      let file = request.params.file;
      
      if (cssObj[file]) {
        return h.file(cssObj[file]);
      } 
    }
  });

  // js library files
  server.route({
    method: 'GET',
    path: '/js/{file}',
    handler: (request, h) => {
      let file = request.params.file;

      if (jsObj[file]) {
        return h.file(jsObj[file]);
      }
    }
  });

  // pug sub routes
  server.route({
    method: 'GET',
    path: '/pug/{sub}',
    handler: (request, h) => {
      let rt = request.params.sub;

      if (rt === 'api') {
        return h.view('pug-api', {api: apiData});
      } else if (pugObj[rt]) {
        return h.view(pugObj[rt]);
      }
    }
  });


  server.route({
    method: 'GET',
    path: '/elasticsearch',
    handler: esHandler
  });

  server.route({
    method: 'GET',
    path: '/hapi',
    handler: hapiHandler
  });

  server.route({
    method: 'GET',
    path: '/pug',
    handler: pugHandler
  });

  server.route({
    method: 'GET',
    path: '/redux',
    handler: reduxHandler
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: rootHandler
  });

  server.route({
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {

        return '404 Error! Page Not Found!';
    }
  });

  // console.log('table: ', server.table())

  await server.start();
  console.log('Server running on %s', server.info.uri);
};


startServer();