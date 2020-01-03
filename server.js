
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');

const Path = require('path');
const pug = require('pug');

// handlers
const rootHandler = require('./handlers/rootHandler.js');

const { initES } = require('./es.js');

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
    path: 'templates'
  });

  server.route({
    method: 'GET',
    path: '/styles.css',
    handler: (request, h) => h.file('styles.css')
  });


  server.route({
    method: 'GET',
    path: '/',
    handler: rootHandler
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};


startServer();