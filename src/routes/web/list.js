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
          id: hit._id,
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

module.exports.listOne = (req, res) => {
  const dinoId = req.params.id;
  esClient.get({
    index: 'dinos',
    id: dinoId,
    type: '_all',
  }, (err, resp) => {
    let dino = {};

    if (!err) {
      dino = {
        id: resp.id,
        series: resp._source.DinoSeries,
        name: resp._source.DinoName,
        date: resp._source.DinoDate,
        desc: resp._source.DinoDescription,
        imgURL: resp._source.DinoImageURL,
      };

      res.render('list-one', { dino }, (err, html) => {
        res.send(html);
      });
    }
  });
}
