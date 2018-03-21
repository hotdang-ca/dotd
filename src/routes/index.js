const apiRoute = require('./api');

function init(server) {
  server.get('*', (req, res, next) => {
    return next();
  });

  server.use('/api', apiRoute);
}

module.exports = {
  init: init,
};
