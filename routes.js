const express = require('express');
const router = express.Router();
const { vote, getResults } = require('./controllers');

router.post('/vote', vote);
router.get('/results', getResults);

module.exports = router;
