var express = require('express');
var router = express.Router();
const db = require('./config/db');

router.get('/', function(req, res) {
  res.send({ greeting : 'Hello React x Node.js !'});
});

router.get('/user', (req,res) => {
  db.query('SELECT * FROM user', (err, data) => {
      if(!err) res.send({ user : data});
      else res.send(err);
  })
})

module.exports = router;