const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.post('/vote', controllers.vote);
router.get('/check-voted', controllers.checkVoted);

module.exports = router;