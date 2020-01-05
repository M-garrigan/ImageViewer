
const { Client } = require('@elastic/elasticsearch');

exports.initES = () => {
  const client = new Client({
    node: 'localhost:9200',
    log: 'trace'
  });
  return client;
};

exports.createES = (index, body) => {
  client.index({
    index,
    body
  });
};
  