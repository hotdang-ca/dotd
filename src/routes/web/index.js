const express = require('express');
const router = express.Router();
const listRoute = require('./list');
router.get('/', listRoute.listAll);

module.exports = router;
