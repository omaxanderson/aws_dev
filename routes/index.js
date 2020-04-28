var child_process = require('child_process');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  child_process.exec('hostname -f', (err, stdout) => {
      if (err) {
          return res.send('ERROR');
      }
      res.render('index', {
          title: 'Express',
          host: stdout,
      });
  });
});

module.exports = router;
