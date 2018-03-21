const express = require('express');
const router = express.Router();
const healthzRoute = require('./healthz');

// /api/*
router.get('/healthz', healthzRoute);

module.exports = router;
