const elasticsearch = require('elasticsearch');

const esUser = 'elastic';
const esPass = '';
const esHost = 'localhost';
const esPort = 9200;

const client = new elasticsearch.Client({
  hosts: [
    `http://${esUser}:${esPass}@${esHost}:${esPort}`,
  ],
});

module.exports = client;
