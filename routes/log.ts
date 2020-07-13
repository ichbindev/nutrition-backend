import express = require('express');
var router = express.Router();

interface Parameters {
  params: {
      user: string,
      log: string
  };
}

/* GET log IDs for user */
router.get('/user/:user', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('Logs for user ' + req.params.user);
});

// GET a specific log
router.get('/:log', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('Log is ' + req.params.log);
});

// add a log
router.post('/:user', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('Add log for user ' + req.params.user);
});

// update a log
router.put('/:log', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('Update log ' + req.params.log);
});

// delete a log
router.delete('/:log', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('Delete log ' + req.params.log);
});

module.exports = router;
