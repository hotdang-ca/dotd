var client = require('./connection');

client.search({
  index: 'dinos',
  body: {
    query: {
      match_all: {},
    },
  },
}, (err, resp, status) => {
  if (err) {
    console.log('search error', err);
  } else {
    console.log(resp);
    resp.hits.hits.forEach((hit) => {
      console.log('hit:', hit);
    });
  }
});
