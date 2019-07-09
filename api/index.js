const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('*', (req, res) => {
  console.log(req.session);
  res.send(fs.readFileSync(
    path.resolve(path.join('dist', 'index.html')),
    'utf-8'
    ));
});

router.post('/api/login', require('./login'));

router.post('/api/saveNewUSer', require('./user'));

module.exports = router;
