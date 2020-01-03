
const es = require('elasticsearch');

exports.initES = () => {
  const client = new es.Client({
    host: 'localhost:9200',
    log: 'trace'
  })
  return client;
};
  