const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('*', (req, res) => {
  res.send(fs.readFileSync(
    path.resolve(path.join('dist', 'index.html')),
    'utf-8'
    ));
});

module.exports = router;
