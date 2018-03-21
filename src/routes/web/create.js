const esClient = require('../../es/connection');
/**
 * /create
 */
module.exports.index = (req, res) => {
  res.render('create-index');
}

module.exports.post = (req, res) => {
  const { date, series, description, image, name } = req.body;

  const imageFile = req.files.image;
  const imageFileName = imageFile.name;

  imageFile.mv(`${__dirname}/../../../static/uploads/${imageFileName}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    esClient.index({
      index: 'dinos',
      type: 'dinos',
      body: {
        "DinoName": name,
        "DinoSeries": series,
        "DinoDate": date,
        "DinoDescription": description,
        "DinoImageURL": `/uploads/${imageFileName}`,
      },
    }, (err, resp, status) => {
      res.redirect(200, '/');
    });

  });
}
