
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');

const Path = require('path');
const pug = require('pug');

// static routes
const svgObj = require('./routes/svgs.js');
const cssObj = require('./routes/css.js');

// handlers
const esHandler = require('./handlers/esHandler.js');
const hapiHandler = require('./handlers/hapiHandler.js');
const pugHandler = require('./handlers/pugHandler.js');
const rootHandler = require('./handlers/rootHandler.js');
const newsHandler = require('./handlers/newsHandler.js');

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

  server.route({
    method: 'GET',
    path: '/prism.js',
    handler: (request, h) => h.file('node_modules/prismjs/prism.js')
  });

  server.route({
    method: 'GET',
    path: '/prism-line-numbers.js',
    handler: (request, h) => h.file('node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.js')
  });

  server.route({
    method: 'GET',
    path: '/prism-pug.js',
    handler: (request, h) => h.file('node_modules/prismjs/components/prism-pug.js')
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