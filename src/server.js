const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const winston = require('winston');
const expressWinston = require('express-winston');
const pug = require('pug');
const fileUpload = require('express-fileupload');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'pug');

const port = process.env.PORT || 8089;
app.use(fileUpload());

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
  meta: true,
  msg: "HTTP {{ req.method}} {{req.ujrl}}",
  expressFormat: true,
  colorize: false,
  ignoreRoute: (req, res) => { return false; },
}));

// Routes
var router = express.Router();

// Api Routes
const apiRoutes = require('./routes/api');
router.use('/api', apiRoutes);

// Web routes
const listRoute = require('./routes/web/list');
const createRoute = require('./routes/web/create');
router.get('/', listRoute.listAll);
app.get('/create', (req, res) => {
  createRoute.index(req, res);
});
app.post('/create', (req, res) => {
  createRoute.post(req, res);
});

app.use('/', router);

app.use(express.static('static'))

app.listen(port);
console.log(`Listening on port ${port}`);