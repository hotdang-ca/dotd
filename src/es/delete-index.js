var client = require('./connection');

client.indices.delete({ index: 'dinos' }, (err, resp, status) => {
  console.log('delete', resp);
});
