const client = require('./connection');

client.indices.create({
  index: 'dinos',
}, (err, resp, status) => {
  if (err) {
    console.log(err);
  } else {
    console.log('create', resp);
  }
});
