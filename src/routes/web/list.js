const esClient = require('../../es/connection');

module.exports.listAll = (req, res) => {
  esClient.search({
    index: 'dinos',
    size: 1000,
    body: {
      query: {
        match_all: {},
      },
    },
  }, (err, resp, status) => {
    if (err) {
    } else {
      let dinos = [];
      resp.hits.hits.forEach((hit) => {
        dinos.push({
          series: hit._source.DinoSeries,
          name: hit._source.DinoName,
          date: hit._source.DinoDate,
          desc: hit._source.DinoDescription,
          imgURL: hit._source.DinoImageURL,
        });
      });

      res.render('list-index', { dinos: dinos.sort((a, b) => b.date.localeCompare(a.date)) }, (err, html) => {
        res.send(html);
      });
    }
  });
}
