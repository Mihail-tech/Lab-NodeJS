var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const name = req.query.name;
  if (name === undefined) {
    res.status(400).json({ name: 'null', message: 'You should write name' });
    
  } else {
    res.render('index', {name});
  }
});

module.exports = router;

