var express = require('express');
var router = express.Router();

/* GET log IDs for user */
router.get('/user/:user', function(req, res, next) {
  res.send('Logs for user ' + user);
});

// GET a specific log
router.get('/:log', function(req, res, next) {
  res.send('Log is ' + log);
});

// add a log
router.post('/:user', function(req, res, next) {
  res.send('Add log for user ' + user);
});

// update a log
router.put('/:log', function(req, res, next) {
  res.send('Update log ' + log);
});

// delete a log
router.delete('/:log', function(req, res, next) {
  res.send('Delete log ' + log);
});

module.exports = router;
