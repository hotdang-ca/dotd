const client = require('./connection');

client.cluster.health({}, (err, resp, status) => {

  const status = resp;
  let records = 0;
  // client.count({ index: 'dinos' }, function (err, resp, status) => {
  //   console.log('resp', resp);
  //   records = resp;
  // });

  // status.records = records;
  console.log('-- Client Health --', status);
});
