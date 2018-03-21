const esClient = require('../../es/connection');

/**
 * /api/healthz
 */
const index = (req, res) => {
  esClient.cluster.health({}, (err, resp, status) => {
    if (err) {
      res.status(500).json({ esHealth: 'not available.' });
    } else {
      const healthStatus = resp;
      let records = 0;

      esClient.count({ index: 'dinos' }, (err, resp, status) => {
        records = resp;
        healthStatus.dinos = records;
        res.json({ esHealth: healthStatus });
      });
    }
  });
}

module.exports = index;
