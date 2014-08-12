var express = require('express');
var router = express.Router();

/* GET todo listing. */
router.get('/', function(req, res) {
  res.render('todo', { title: 'Express' });
});

module.exports = router;
