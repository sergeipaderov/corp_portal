const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/api/login', (req, res, next) => {
  console.log(JSON.parse(req.body));
  passport.authenticate('local', (err, user) => {
    if (err) { return next(err); }
    // console.log('----->', user);
    if (!user) { return console.log('Wrong user!'); }
    req.logIn(user, err => {
      if (err) { return next(err); }
      return console.log('err');
    });
  })(req, res, next);
});

module.exports = router;
